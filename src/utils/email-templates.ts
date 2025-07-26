export const getWelcomeEmailTemplate = () => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Bartek Blog</title>
</head>
<body style="margin: 0; padding: 0; background-color: #fafafa; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a1a;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 32px; text-align: center;">
            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.025em;">Welcome to Bartek Blog!</h1>
            <p style="margin: 16px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">You're now part of our community of builders and learners</p>
        </div>

        <!-- Content -->
        <div style="padding: 40px 32px;">
            <div style="text-align: center; margin-bottom: 32px;">
                <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-size: 24px; font-weight: 600;">✓</span>
                </div>
                <h2 style="margin: 0 0 16px 0; color: #1a1a1a; font-size: 24px; font-weight: 600;">You're all set!</h2>
                <p style="margin: 0; color: #666666; font-size: 16px;">Thanks for subscribing to my newsletter. I'm excited to share my journey with you!</p>
            </div>

            <div style="background-color: #f8f9fa; border-radius: 8px; padding: 24px; margin-bottom: 32px;">
                <h3 style="margin: 0 0 16px 0; color: #1a1a1a; font-size: 18px; font-weight: 600;">What you'll receive:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #666666;">
                    <li style="margin-bottom: 8px;">Latest blog posts about software development</li>
                    <li style="margin-bottom: 8px;">Lessons learned from building products</li>
                    <li style="margin-bottom: 8px;">Insights on new technologies and tools</li>
                    <li style="margin-bottom: 0;">Behind-the-scenes of my engineering journey</li>
                </ul>
            </div>

            <div style="text-align: center; margin-bottom: 32px;">
                <p style="margin: 0 0 16px 0; color: #666666; font-size: 16px;">Stay tuned for valuable insights delivered straight to your inbox!</p>
                <a href="https://bartoszformanowski.engineer" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 500; font-size: 14px;">Visit My Blog</a>
            </div>

            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0;">
            
            <div style="text-align: center;">
                <p style="margin: 0 0 8px 0; color: #666666; font-size: 14px;">Best regards,</p>
                <p style="margin: 0; color: #1a1a1a; font-weight: 600; font-size: 16px;">Bartek Fórmanowski</p>
                <p style="margin: 4px 0 0 0; color: #666666; font-size: 14px;">Product Engineer</p>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8f9fa; padding: 24px 32px; text-align: center; border-top: 1px solid #e5e5e5;">
            <p style="margin: 0 0 16px 0; color: #666666; font-size: 14px;">Connect with me:</p>
            <div style="display: flex; justify-content: center; gap: 16px;">
                <a href="https://github.com/BartekFo" style="color: #666666; text-decoration: none; font-size: 14px;">GitHub</a>
                <span style="color: #e5e5e5;">•</span>
                <a href="https://www.linkedin.com/in/bformanowski/" style="color: #666666; text-decoration: none; font-size: 14px;">LinkedIn</a>
            </div>
        </div>
    </div>
</body>
</html>
`;
