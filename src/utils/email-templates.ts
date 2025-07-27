export const getWelcomeEmailTemplate = () => `
<!DOCTYPE html>
<html>
  <head>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
    <link
      rel="stylesheet"
      as="style"
      onload="this.rel='stylesheet'"
      href="https://fonts.googleapis.com/css2?display=swap&amp;family=Newsreader%3Awght%40400%3B500%3B700%3B800&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
    />

    <title>Stitch Design</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  </head>
  <body>
    <div
      class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style="font-family: Newsreader, &quot;Noto Sans&quot;, sans-serif"
    >
      <div class="layout-container flex h-full grow flex-col">
        <div class="px-40 flex flex-1 justify-center py-5">
          <div
            class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1"
          >
            <div class="@container">
              <div class="@[480px]:px-4 @[480px]:py-3">
                <div
                  class="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-lg min-h-[218px]"
                  style="
                    background-image: url(&quot;https://www.bartoszformanowski.engineer/email-bg.png&quot;);
                  "
                ></div>
              </div>
            </div>
            <h2
              class="text-[#141414] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5"
            >
              Welcome to Bartek Blog!
            </h2>
            <p
              class="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center"
            >
              I'm thrilled to have you join my community of readers. My blog is
              dedicated to providing insightful articles on a variety of topics,
              from technology and innovation to lifestyle and personal growth. I
              hope you find my content engaging and valuable.
            </p>
            <div class="flex px-4 py-3 justify-center">
              <a
                href="https://www.bartoszformanowski.engineer/blog"
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#7f7f7f] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">View Latest Posts</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;
