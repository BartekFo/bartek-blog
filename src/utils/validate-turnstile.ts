interface TurnstileResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

export async function validateTurnstile(token: string) {
  const turnstileResponse = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: import.meta.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    }
  );

  const turnstileData: TurnstileResponse = await turnstileResponse.json();

  return turnstileData.success;
}
