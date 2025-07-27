import { resendClient } from './resend-client';

export async function checkContactExists(email: string): Promise<boolean> {
  try {
    const response = await resendClient.contacts.list({
      audienceId: '0c162ff9-7b8e-49fd-998c-fdb7e4bb424a',
    });

    // Check if response has data and it's an array
    if (response.data && Array.isArray(response.data)) {
      return response.data.some(
        (contact: { email?: string }) => contact.email === email
      );
    }

    return false;
  } catch {
    return false;
  }
}
