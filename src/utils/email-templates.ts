export const getWelcomeEmailTemplate = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Bartek Blog</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700;900&display=swap" rel="stylesheet">
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: 'Newsreader', 'Noto Sans', sans-serif;
        background-color: #ffffff;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      
      .email-container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
      }
      
      .content-wrapper {
        padding: 20px;
      }
      
      .hero-image {
        width: 100%;
        height: 218px;
        background-image: url('https://www.bartoszformanowski.engineer/email-bg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 8px;
        margin-bottom: 20px;
      }
      
      .title {
        color: #141414;
        font-size: 28px;
        font-weight: 700;
        line-height: 1.2;
        text-align: center;
        margin: 20px 0 12px 0;
        padding: 0 16px;
      }
      
      .description {
        color: #141414;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        margin: 4px 0 12px 0;
        padding: 0 16px;
      }
      
      .button-container {
        text-align: center;
        padding: 12px 16px;
      }
      
      .cta-button {
        display: inline-block;
        min-width: 84px;
        max-width: 480px;
        height: 40px;
        padding: 0 16px;
        background-color: #7f7f7f;
        color: #ffffff !important;
        font-size: 14px;
        font-weight: 700;
        line-height: 40px;
        text-align: center;
        text-decoration: none;
        border-radius: 8px;
        letter-spacing: 0.015em;
      }
      
      .cta-button:hover {
        background-color: #6b6b6b;
      }
      
      @media only screen and (max-width: 480px) {
        .content-wrapper {
          padding: 12px;
        }
        
        .title {
          font-size: 24px;
          padding: 0 8px;
        }
        
        .description {
          font-size: 14px;
          padding: 0 8px;
        }
        
        .button-container {
          padding: 12px 8px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="content-wrapper">
        <div class="hero-image"></div>
        <h2 class="title">Welcome to Bartek Blog!</h2>
        <p class="description">
          I'm thrilled to have you join my community of readers. My blog is
          dedicated to providing insightful articles on a variety of topics,
          from technology and innovation to lifestyle and personal growth. I
          hope you find my content engaging and valuable.
        </p>
        <div class="button-container">
          <a href="https://www.bartoszformanowski.engineer/blog" class="cta-button">
            View Latest Posts
          </a>
        </div>
      </div>
    </div>
  </body>
</html>
`;
