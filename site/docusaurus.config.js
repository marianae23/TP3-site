// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SweetFlow',

  tagline: 'Sistema de gestão para docerias modernas',

  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://github.com',

  baseUrl: '/',

  organizationName: 'marianaenachi23',

  projectName: 'doceria-docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',

      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',

          editUrl:
            'https://github.com/marianaenachi23/doceria-docusaurus',
        },

        blog: {
          showReadingTime: true,

          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          editUrl:
            'https://github.com/marianaenachi23/doceria-docusaurus',

          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'SweetFlow',

        logo: {
          alt: 'SweetFlow Logo',
          src: 'img/logo.svg',
        },

        items: [
          {
            to: '/docs/intro',
            label: 'Documentação',
            position: 'left',
          },

          {
            to: '/blog',
            label: 'Atualizações',
            position: 'left',
          },

          {
            href: 'https://github.com/marianaenachi23/doceria-docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',

        links: [
          {
            title: 'Documentação',

            items: [
              {
                label: 'Introdução',
                to: '/docs/intro',
              },
            ],
          },

          {
            title: 'Projeto',

            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/marianaenachi23/doceria-docusaurus',
              },
            ],
          },

          {
            title: 'Tecnologias',

            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} SweetFlow.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;