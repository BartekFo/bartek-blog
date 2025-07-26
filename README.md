# Bartek Blog

A personal blog built with Astro, featuring a newsletter subscription system powered by Resend.

## Newsletter Setup

This blog includes a newsletter subscription system using Resend. To set it up:

1. **Get a Resend API Key**:

   - Sign up at [resend.com](https://resend.com)
   - Create an API key in your dashboard
   - Copy the API key (starts with `re_`)

2. **Set Environment Variables**:

   - Copy `.env.example` to `.env`
   - Add your Resend API key: `RESEND_API_KEY=re_your_key_here`
   - Set your site URL: `SITE_URL=https://yourdomain.com`

3. **Verify Your Domain**:

   - In Resend dashboard, add and verify your domain
   - Update the `from` email in `/src/pages/api/subscribe.ts` and `/src/pages/api/newsletter.ts` to use your verified domain

4. **Test the Newsletter**:
   - Run `npm run dev`
   - Visit your site and test the subscription form
   - Check that welcome emails are sent successfully

## Features

- Newsletter subscription with welcome emails
- Unsubscribe functionality
- Email templates with proper headers
- Form validation and error handling
- Success/error message display

## API Endpoints

- `POST /api/subscribe` - Handle newsletter subscriptions
- `GET /api/unsubscribe` - Handle unsubscriptions
- `POST /api/newsletter` - Send newsletters to all subscribers (for future use)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
