import { getWelcomeEmailTemplate } from './email-templates';
import { resendClient } from './resend-client';

export async function sendWelcomeEmail(email: string) {
  await resendClient.emails.send({
    from: 'Bartek Blog <newsletter@updates.bartoszformanowski.engineer>',
    to: [email],
    subject: 'Welcome to Bartek Blog Newsletter! 🚀',
    html: getWelcomeEmailTemplate(),
  });
}
