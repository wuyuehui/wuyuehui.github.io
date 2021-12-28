// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'wuyuehui', // 网站的标题
  tagline: '', // 网站的标语
  url: 'https://wuyuehui.github.io', // URL for your website
  baseUrl: '/', // Base URL for your site
  onBrokenLinks: 'throw', // 当 Docusaurus 检测到任何无效的链接时所应采取的行为。
  onBrokenMarkdownLinks: 'warn', // 当 Docusaurus 检测到任何无效的 markdown 链接时，Docusaurus 应该采取的行为。
  favicon: 'img/favicon.ico',
  organizationName: 'wuyuehui', // 拥有此源码仓库的 GitHub 用户或组织
  projectName: 'wuyuehui.github.io', // GitHub 源码仓库的名称
  deploymentBranch: 'gh-pages',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/',
          editUrl: 'https://github.com/wuyuehui/wuyuehui.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/wuyuehui/wuyuehui.github.io/edit/main/',
          blogSidebarTitle: '我的日常',
          postsPerPage: 5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "wuyuhui",
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            activeBasePath: 'docs',
            position: 'right',
            label: '文档',
          },
          {
            to: '/blog',
            position: 'right',
            label: '日常',
          },
          {
            href: 'https://github.com/wuyuehui',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} wyh, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
