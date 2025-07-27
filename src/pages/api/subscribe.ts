import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import type { APIRoute } from 'astro';
import { checkContactExists } from '../../utils/check-contact-exists';
import { createContact } from '../../utils/create-contact';
import { sendWelcomeEmail } from '../../utils/send-welcome-email';
import { validateTurnstile } from '../../utils/validate-turnstile';

export const prerender = false;

const redis = new Redis({
  url: import.meta.env.UPSTASH_REDIS_REST_URL,
  token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(1, '10 s'), // 1 requests from the same IP in 10 seconds
});

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const ip = clientAddress;
    const { success, limit, remaining, reset } = await ratelimit.limit(ip);

    if (!success) {
      return Response.json(
        {
          error: 'Too many requests. Please try again later.',
          limit,
          remaining,
          reset,
        },
        { status: 429 }
      );
    }

    const formData = await request.formData();
    const email = formData.get('email')?.toString();
    const token = formData.get('cf-turnstile-response')?.toString();

    if (!(email && token)) {
      return Response.json(
        { error: 'Email and token are required' },
        { status: 400 }
      );
    }

    const turnstileSuccess = await validateTurnstile(token);

    if (!turnstileSuccess) {
      return Response.json(
        { error: 'Unsuccessful verification. Try again later.' },
        { status: 400 }
      );
    }

    const contactExists = await checkContactExists(email);

    if (contactExists) {
      return Response.json(
        {
          message: 'You are already subscribed to our newsletter',
        },
        { status: 409 }
      );
    }

    await createContact(email);
    await sendWelcomeEmail(email);

    return Response.json({
      message: 'Subscription successful',
    });
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: This is okay
    console.error('Subscription error:', error);
    return Response.json(
      { error: 'An unknown error occurred. Please try again later.' },
      { status: 500 }
    );
  }
};
