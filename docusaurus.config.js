// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Domino',
  tagline: 'Build amazing ideas, piece by piece.',
  favicon: 'favicon/favicon.ico',

  // Set the production url of your site here
  // url: 'https://tauffer-consulting.github.io',
  url: 'https://docs.domino-workflows.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Tauffer-Consulting', // Usually your GitHub org/user name.
  projectName: 'domino-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            // require.resolve('./src/css/aos.css'),
          ],
        },
        gtag: {
          trackingID: 'G-1V1CKBCDCW',
          anonymizeIP: true,
        },
        sitemap: {
          // lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          // createSitemapItems: async (params) => {
          //   const { defaultCreateSitemapItems, ...rest } = params;
          //   const items = await defaultCreateSitemapItems(rest);
          //   return items.filter((item) => !item.url.includes('/page/'));
          // },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Domino Logo',
          src: 'brand/png/main_logo.png',
          href: "https://domino-workflows.io",
          target: '_self',
          srcDark: 'brand/png/main_logo_white.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          { to: '/gallery', label: 'Gallery', position: 'right' },
          {
            href: 'https://github.com/Tauffer-Consulting/domino',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quickstart',
                to: '/quickstart',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/Tauffer-Consulting/domino/discussions',
              },
              {
                label: 'Twitter / X',
                href: 'https://x.com/DominoWorkflows',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@DominoWorkflows',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Tauffer-Consulting/domino',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/domino-workflows',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Domino.`,
        // Other footer elements...
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // scripts: [
      //   // Other scripts...
      //   "https://unpkg.com/aos@next/dist/aos.js",
      //   "<script>AOS.init();</script>",
      // ],
    }),
};

module.exports = config;
