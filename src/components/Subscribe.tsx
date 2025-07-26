import { useEffect, useRef, useState } from 'preact/hooks';
import siteConfig from '../data/site-config';

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

interface SubscribeResponse {
  message?: string;
  error?: string;
}

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<SubmissionState>('idle');
  const [message, setMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string>('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (turnstileRef.current && window.turnstile) {
        turnstileWidgetId.current = window.turnstile.render(
          turnstileRef.current,
          {
            sitekey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY,
            callback: (token: string) => {
              setTurnstileToken(token);
            },
          }
        );
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const resetForm = () => {
    setEmail('');
    setTurnstileToken('');
    if (window.turnstile && turnstileWidgetId.current) {
      window.turnstile.reset(turnstileWidgetId.current);
    }
  };

  const handleError = (errorMessage: string) => {
    setState('error');
    setMessage(errorMessage);
  };

  const handleSuccess = (successMessage: string) => {
    setState('success');
    setMessage(successMessage);
    resetForm();
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (!(email && turnstileToken)) {
      handleError('Please complete all fields and verification');
      return;
    }

    setState('submitting');
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('cf-turnstile-response', turnstileToken);

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        body: formData,
      });

      const data: SubscribeResponse = await response.json();

      if (response.ok) {
        handleSuccess(data.message || 'Successfully subscribed!');
      } else {
        const errorMsg =
          response.status === 429
            ? 'Too many requests. Please try again later.'
            : data.error || 'Subscription failed. Please try again.';
        handleError(errorMsg);
      }
    } catch (error) {
      handleError('An unexpected error occurred. Please try again.');
      // biome-ignore lint/suspicious/noConsole: This is okay for debugging
      console.error('Subscription error:', error);
    }
  };

  const handleEmailChange = (e: Event) => {
    const target = e.currentTarget as HTMLInputElement;
    setEmail(target.value);

    // Clear messages when user starts typing
    if (message && state !== 'submitting') {
      setMessage('');
      setState('idle');
    }
  };

  return (
    <section class="mx-auto my-16 w-full max-w-2xl sm:my-24">
      <div class="rounded-2xl bg-muted px-4 py-8 text-center">
        {siteConfig.subscribe?.title && (
          <h2 class="font-medium font-serif text-xl sm:text-2xl">
            {siteConfig.subscribe.title}
          </h2>
        )}
        {siteConfig.subscribe?.text && (
          <p class="mx-auto mt-2 max-w-xl">{siteConfig.subscribe.text}</p>
        )}

        <form
          class="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row"
          onSubmit={handleSubmit}
        >
          <label class="sr-only" for="email-input">
            Email address
          </label>
          <input
            class="w-full grow rounded-lg border border-main bg-main px-4 py-2.5 text-base"
            disabled={state === 'submitting'}
            id="email-input"
            onInput={handleEmailChange}
            placeholder="Enter your email"
            required
            type="email"
            value={email}
          />

          <div class="cf-turnstile" ref={turnstileRef} />

          <button
            class="rounded-lg bg-black px-6 py-2.5 font-medium text-base text-white disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black"
            disabled={state === 'submitting' || !email || !turnstileToken}
            type="submit"
          >
            {state === 'submitting' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {message && (
          <p
            class={`mt-4 text-sm ${
              state === 'success'
                ? 'text-green-600 dark:text-green-400'
                : 'text-red-600 dark:text-red-400'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
