import { resendClient } from './resend-client';

export async function createContact(email: string) {
  await resendClient.contacts.create({
    email,
    unsubscribed: false,
    audienceId: '0c162ff9-7b8e-49fd-998c-fdb7e4bb424a',
  });
}
