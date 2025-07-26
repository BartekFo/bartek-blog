export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
};

export type SiteConfig = {
  website: string;
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  // projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  website: 'https://example.com',
  title: 'Bartek Fórmanowski',
  subtitle: 'Product Engineer',
  description:
    "Hey, I'm Bartek! Product Engineer documenting my journey building software, solving problems, and learning new technologies along the way.",
  image: {
    src: '/dante-preview.jpg',
    alt: 'Dante - Astro.js and Tailwind CSS theme',
  },
  headerNavLinks: [
    {
      text: 'Home',
      href: '/',
    },
    // {
    //     text: 'Projects',
    //     href: '/projects'
    // },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Tags',
      href: '/tags',
    },
  ],
  footerNavLinks: [
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  hero: {
    title: 'Hi There & Welcome to My Corner of the Web!',
    text: "I'm **Bartek Fórmanowski**, sharing my journey building software and learning new technologies. I write about the problems I solve, the tools I discover, and the lessons I learn along the way. Check out my work on <a href='https://github.com/BartekFo'>GitHub</a> or connect with me on <a href='https://www.linkedin.com/in/bformanowski/'>LinkedIn</a>.",
    image: {
      src: '/hero.png',
      alt: 'A person standing on dark background',
    },
    actions: [
      {
        text: 'Get in Touch',
        href: '/contact',
      },
    ],
  },
  subscribe: {
    title: 'Subscribe to Bartek Blog Newsletter',
    text: 'One update per week. All the latest posts directly in your inbox.',
  },
  postsPerPage: 8,
  // projectsPerPage: 8
};

export default siteConfig;
