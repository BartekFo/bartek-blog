import { Resend } from 'resend';

export const resendClient = new Resend(import.meta.env.RESEND_API_KEY);
