/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import path from 'path';
import npm2yarn from '@docusaurus/remark-plugin-npm2yarn';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import configTabs from './src/remark/configTabs';

import ConfigLocalized from './docusaurus.config.localized.json';

import PrismLight from './src/utils/prismLight';
import PrismDark from './src/utils/prismDark';

import type {Config, DocusaurusConfig} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const crashTest = process.env.DOCUSAURUS_CRASH_TEST === 'true';
const isSlower = process.env.DOCUSAURUS_SLOWER === 'true';
if (isSlower) {
  console.log('🐢 Using slower Docusaurus build');
}

const router = process.env
  .DOCUSAURUS_ROUTER as DocusaurusConfig['future']['experimental_router'];

const isDev = process.env.NODE_ENV === 'development';
const isDeployPreview =
  !!process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';
const isBranchDeploy =
  !!process.env.NETLIFY && process.env.CONTEXT === 'branch-deploy';
const isBuildFast = !!process.env.BUILD_FAST;
const baseUrl = process.env.BASE_URL ?? '/';
const isI18nStaging = process.env.I18N_STAGING === 'true';
const isVersioningDisabled = !!process.env.DISABLE_VERSIONING || isI18nStaging;
const isRsdoctor = process.env.RSDOCTOR === 'true';

const defaultLocale = 'en';

function getLocalizedConfigValue(key: keyof typeof ConfigLocalized) {
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
  const values = ConfigLocalized[key];
  if (!values) {
    throw new Error(`Localized config key=${key} not found`);
  }
  const value = values[currentLocale] ?? values[defaultLocale];
  if (!value) {
    throw new Error(
      `Localized value for config key=${key} not found for both currentLocale=${currentLocale} or defaultLocale=${defaultLocale}`,
    );
  }
  return value;
}

export default async function createConfigAsync() {
  return {
    title: 'Docusaurus',
    tagline: getLocalizedConfigValue('tagline'),
    organizationName: 'facebook',
    projectName: 'docusaurus',
    baseUrl,
    baseUrlIssueBanner: true,
    url: 'https://docusaurus.io',
    trailingSlash: isDeployPreview,
    stylesheets: [
      {
        href: '/katex/katex.min.css',
        type: 'text/css',
      },
    ],
    i18n: {
      defaultLocale,
      locales:
        isDeployPreview || isBranchDeploy
          ? [defaultLocale]
          : isI18nStaging
          ? [defaultLocale, 'ja']
          : [defaultLocale, 'fr', 'pt-BR', 'ko', 'zh-CN'],
    },
    markdown: {
      format: 'detect',
      mermaid: true,
      mdx1Compat: {},
      remarkRehypeOptions: {
        footnoteLabel: getLocalizedConfigValue('remarkRehypeOptions_footnotes'),
      },
      parseFrontMatter: async (params) => {
        return await params.defaultParseFrontMatter(params);
      },
      preprocessor: ({filePath, fileContent}) => {
        let result = fileContent;
        result = result.replaceAll('{/_', '{/*');
        result = result.replaceAll('_/}', '*/}');
        return result;
      },
    },
    onBrokenLinks:
      isVersioningDisabled ||
      process.env.DOCUSAURUS_CURRENT_LOCALE !== defaultLocale
        ? 'warn'
        : 'throw',
    onBrokenAnchors:
      isVersioningDisabled ||
      process.env.DOCUSAURUS_CURRENT_LOCALE !== defaultLocale
        ? 'warn'
        : 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/docusaurus.ico',
    customFields: {
      crashTest,
      isDeployPreview,
      description:
        'An optimized site generator in React. Docusaurus helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.',
    },
    staticDirectories: ['static'],
    themes: ['live-codeblock'],
    plugins: [
      isRsdoctor && [
        'rsdoctor',
        {
          rsdoctorOptions: {
            disableTOSUpload: true,
            supports: {
              generateTileGraph: true,
            },
            linter: {
              rules: {
                'ecma-version-check': 'off',
                'duplicate-package': 'off',
              },
            },
          },
        },
      ],

      [
        'ideal-image',
        {
          quality: 70,
          max: 1030,
          min: 640,
          steps: 2,
          disableInDev: true,
        },
      ],
      [
        'pwa',
        {
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          swCustom: require.resolve('./src/sw.js'),
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: 'img/docusaurus.png',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: 'manifest.json',
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: 'rgb(37, 194, 160)',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#000',
            },
            {
              tagName: 'link',
              rel: 'apple-touch-icon',
              href: 'img/docusaurus.png',
            },
            {
              tagName: 'link',
              rel: 'mask-icon',
              href: 'img/docusaurus.png',
              color: 'rgb(62, 204, 94)',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileImage',
              content: 'img/docusaurus.png',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileColor',
              content: '#000',
            },
          ],
        },
      ],
      '@docusaurus/theme-mermaid',
      './src/plugins/featureRequests/FeatureRequestsPlugin.js',
    ],
    presets: [
      [
        'classic',
        {
          debug: true,
          docs: {
            routeBasePath: '/',
            path: 'docs',
            sidebarPath: 'sidebars.ts',
            editUrl: ({locale, docPath}) => {
              if (locale !== defaultLocale) {
                return `https://crowdin.com/project/docusaurus-v2/${locale}`;
              }
              return `https://github.com/facebook/docusaurus/edit/main/website/docs/${docPath}`;
            },
            admonitions: {
              keywords: ['my-custom-admonition'],
            },
            showLastUpdateAuthor: false,
            showLastUpdateTime: false,
            remarkPlugins: [[npm2yarn, {sync: true}], remarkMath, configTabs],
            rehypePlugins: [rehypeKatex],
            lastVersion: 'current',
          },
          blog: {
            path: 'blog',
            showLastUpdateAuthor: false,
            showLastUpdateTime: false,
            editUrl: ({locale, blogDirPath, blogPath}) => {
              if (locale !== defaultLocale) {
                return `https://crowdin.com/project/docusaurus-v2/${locale}`;
              }
              return `https://github.com/facebook/docusaurus/edit/main/website/${blogDirPath}/${blogPath}`;
            },
            remarkPlugins: [npm2yarn],
            postsPerPage: 5,
            feedOptions: {
              type: 'all',
              description:
                'Keep up to date with upcoming Docusaurus releases and articles by following our feed!',
              copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
              xslt: true,
            },
            blogTitle: 'Docusaurus blog',
            blogDescription: 'Read blog posts about Docusaurus from the team',
            blogSidebarCount: 'ALL',
            blogSidebarTitle: 'All our posts',
            onUntruncatedBlogPosts:
              process.env.DOCUSAURUS_CURRENT_LOCALE !== defaultLocale
                ? 'warn'
                : 'throw',
            onInlineTags:
              process.env.DOCUSAURUS_CURRENT_LOCALE !== defaultLocale
                ? 'warn'
                : 'throw',
          },
          pages: {
            remarkPlugins: [npm2yarn],
            editUrl: ({locale, pagesPath}) => {
              if (locale !== defaultLocale) {
                return `https://crowdin.com/project/docusaurus-v2/${locale}`;
              }
              return `https://github.com/facebook/docusaurus/edit/main/website/src/pages/${pagesPath}`;
            },
            showLastUpdateAuthor: false,
            showLastUpdateTime: false,
          },
          theme: {
            customCss: ['./src/css/custom.css'],
          },
          gtag: !(isDeployPreview || isBranchDeploy)
            ? {
                trackingID: ['G-E5CR2Q1NRE'],
              }
            : undefined,
          sitemap: {
            lastmod: 'date',
            priority: null,
            changefreq: null,
          },
          svgr: {
            svgrConfig: {
              svgoConfig: undefined,
            },
          },
        },
      ],
    ],
    themeConfig: {
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'announcementBar-v1',
        content: `👉️ <b><a target="_blank" href="https://pawchain.net/blog/">Keep up to date with the PAW Chain Blog</a> </b> 👈`,
      },
      prism: {
        additionalLanguages: [
          'java',
          'latex',
          'haskell',
          'matlab',
          'PHp',
          'powershell',
          'bash',
          'diff',
          'json',
          'scss',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
        theme: PrismLight,
        darkTheme: PrismDark,
      },
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        appId: 'KIL8ZUEHIZ',
        apiKey: '159c65d178f11644fa8289c2c7287170',
        indexName: 'pawchain_docs',
        replaceSearchResultPathname:
          isDev || isDeployPreview
            ? {
                from: /^\/docs\/next\/(.*)/,
                to: '/$1',
              }
            : undefined,
      },
      navbar: {
        hideOnScroll: true,
        title: 'Documentation',
        logo: {
          alt: '',
          src: 'img/PawChainLogo.svg',
          srcDark: 'img/docusaurus_keytar.svg',
          width: 150,
          height: 32,
        },
        items: [
          {
            href: 'https://t.me/pawecosystem',
            position: 'right',
            className: 'header-telegram-link',
            'aria-label': 'Telegram',
          },
          {
            href: 'http://www.discord.gg/pawecosystem',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord',
          },
          {
            href: 'https://www.reddit.com/r/PAWTechnology/?rdt=49180',
            position: 'right',
            className: 'header-reddit-link',
            'aria-label': 'Reddit',
          },
          {
            href: 'https://x.com/pawchain',
            position: 'right',
            className: 'header-x-link',
            'aria-label': 'X (Twitter)',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Get Started',
            items: [
              {
                label: 'Set Up a PAW Wallet',
                to: '/getting-started/set-up-a-paw-wallet',
              },
              {
                label: 'How To Obtain $PAW',
                to: '/getting-started/how-to-obtain-paw',
              },
              {
                label: 'Connect to PAW Swap',
                to: '/getting-started/connecting-to-paw-swap',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Follow Us On X',
                href: 'https://x.com/pawchain',
              },
              {
                label: 'Join Our Discord',
                href: 'http://www.discord.gg/pawecosystem',
              },
              {
                label: 'Join Our Telegram',
                href: 'https://t.me/pawecosystem',
              },
              {
                label: 'Join Our Subreddit',
                href: 'https://www.reddit.com/r/PAWTechnology/?rdt=49180t',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://pawchain.net/blog/',
              },
              {
                label: 'Contact',
                href: 'https://www.pawchain.net/about#Contact',
              },
              {
                label: 'CMC Community',
                href: 'https://coinmarketcap.com/community/profile/PawChain/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@pawecosystem',
              },
            ],
          },
          {
            title: 'Legal',
            className: 'footer-column-legal',
            items: [
              {
                label: 'Privacy',
                className: 'footer-item-privacy',
                to: '/legal-and-compliance/privacy-policy',
              },
              {
                label: 'Terms',
                to: '/legal-and-compliance/terms-of-use',
              },
              {
                label: 'Compliance and Disclosures',
                to: '/legal-and-compliance/compliance-and-regulatory-disclosures',
              },
            ],
          },
        ],
        logo: {
          alt: 'PAW Chain Logo',
          src: '/img/docusaurus_keytar.svg',
          href: 'https://pawchain.net',
        },
        copyright: `Copyright © ${new Date().getFullYear()} PAW Chain.`,
      },
    },
  };
}
