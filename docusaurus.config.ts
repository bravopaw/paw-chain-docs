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
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type {Options as PageOptions} from '@docusaurus/plugin-content-pages';
import type {Options as IdealImageOptions} from '@docusaurus/plugin-ideal-image';
import type {Options as ClientRedirectsOptions} from '@docusaurus/plugin-client-redirects';


function isPrerelease(version: string) {
  return (
    version.includes('-') ||
    version.includes('alpha') ||
    version.includes('beta') ||
    version.includes('rc')
  );
}




// The version announced on the homepage hero and announcement banner
// 3.3.2 => 3.3
// 3.0.5 => 3.0


// This probably only makes sense for the alpha/beta/rc phase, temporary
function getNextVersionName() {
  return 'PAW Docs v1.1';
  /*
  const expectedPrefix = '2.0.0-rc.';

  const lastReleasedVersion = versions[0];
  if (!lastReleasedVersion || !lastReleasedVersion.includes(expectedPrefix)) {
    throw new Error(
      'this code is only meant to be used during the 2.0 alpha/beta/rc phase.',
    );
  }
  const version = parseInt(lastReleasedVersion.replace(expectedPrefix, ''), 10);
  return `${expectedPrefix}${version + 1}`;

   */
}

// Artificial way to crash the SSR rendering and test errors
// See website/_dogfooding/_pages tests/crashTest.tsx
// Test with: DOCUSAURUS_CRASH_TEST=true yarn build:website:fast
const crashTest = process.env.DOCUSAURUS_CRASH_TEST === 'true';

// By default, we use Docusaurus Faster
// DOCUSAURUS_SLOWER=true is useful for benchmarking faster against slower
// hyperfine --prepare 'yarn clear:website' --runs 3 'DOCUSAURUS_SLOWER=true yarn build:website:fast' 'yarn build:website:fast'
const isSlower = process.env.DOCUSAURUS_SLOWER === 'true';
if (isSlower) {
  console.log('🐢 Using slower Docusaurus build');
}

const router = process.env
  .DOCUSAURUS_ROUTER as DocusaurusConfig['future']['experimental_router'];

const isDev = process.env.NODE_ENV === 'development';

const isDeployPreview =
  !!process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';

// Netlify branch deploy like "docusaurus-v2"
const isBranchDeploy =
  !!process.env.NETLIFY && process.env.CONTEXT === 'branch-deploy';

// Used to debug production build issues faster
const isBuildFast = !!process.env.BUILD_FAST;

const baseUrl = process.env.BASE_URL ?? '/';

// Special deployment for staging locales until they get enough translations
// https://app.netlify.com/sites/docusaurus-i18n-staging
// https://docusaurus-i18n-staging.netlify.app/
const isI18nStaging = process.env.I18N_STAGING === 'true';

const isVersioningDisabled = !!process.env.DISABLE_VERSIONING || isI18nStaging;

const isRsdoctor = process.env.RSDOCTOR === 'true';

/*
const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';
*/

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
    // Dogfood both settings:
    // - force trailing slashes for deploy previews
    // - avoid trailing slashes in prod
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
          ? // Deploy preview and branch deploys: keep them fast!
            [defaultLocale]
          : isI18nStaging
          ? // Staging locales: https://docusaurus-i18n-staging.netlify.app/
            [defaultLocale, 'ja']
          : // Production locales
            [defaultLocale, 'fr', 'pt-BR', 'ko', 'zh-CN'],
    },
    markdown: {
      format: 'detect',
      mermaid: true,
      mdx1Compat: {
        // comments: false,
      },
      remarkRehypeOptions: {
        footnoteLabel: getLocalizedConfigValue('remarkRehypeOptions_footnotes'),
      },
      parseFrontMatter: async (params) => {
        return await params.defaultParseFrontMatter(params);
      },

      preprocessor: ({filePath, fileContent}) => {
        let result = fileContent;

        // This fixes Crowdin bug altering MDX comments on Cross-chain Interoperability sites...
        // https://github.com/facebook/docusaurus/pull/9220
        result = result.replaceAll('{/_', '{/*');
        result = result.replaceAll('_/}', '*/}');

        const showDevLink = false;

        if (isDev && showDevLink) {
          const isPartial = path.basename(filePath).startsWith('_');
          if (!isPartial) {
            // "vscode://file/${projectPath}${filePath}:${line}:${column}",
            // "webstorm://open?file=${projectPath}${filePath}&line=${line}&column=${column}",
            const vscodeLink = `vscode://file/${filePath}`;
            const webstormLink = `webstorm://open?file=${filePath}`;
            const intellijLink = `idea://open?file=${filePath}`;
            result = `${result}\n\n---\n\n**DEV**: open this file in [VSCode](<${vscodeLink}>) | [WebStorm](<${webstormLink}>) | [IntelliJ](<${intellijLink}>)\n`;
          }
        }

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
    staticDirectories: [
      'static'],
    themes: ['live-codeblock'],
    plugins: [
      isRsdoctor && [
        'rsdoctor',
        {
          rsdoctorOptions: {
            disableTOSUpload: true,
            supports: {
              // https://rsdoctor.dev/config/options/options#generatetilegraph
              generateTileGraph: true,
            },
            linter: {
              // See https://rsdoctor.dev/guide/usage/rule-config
              rules: {
                'ecma-version-check': 'off',
                'duplicate-package': 'off',
              },
            },
          },
        },
      ],
      [
        './src/plugins/changelog/index.ts',
        {
          blogTitle: 'Docusaurus changelog',
          blogDescription:
            'Keep yourself up-to-date about new features in every release',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Changelog',
          routeBasePath: '/changelog',
          showReadingTime: false,
          postsPerPage: 20,
          archiveBasePath: null,
          authorsMapPath: 'authors.json',
          feedOptions: {
            type: 'all',
            title: 'Docusaurus changelog',
            description:
              'Keep yourself up-to-date about new features in every release',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
            language: defaultLocale,
          },
          onInlineAuthors: 'warn',
        },
      ],


      [
        'ideal-image',
        {
          quality: 70,
          max: 1030,
          min: 640,
          steps: 2,
          // Use false to debug, but it incurs huge perf costs
          disableInDev: true,
        } satisfies IdealImageOptions,
      ],
      [
        'pwa',
        {
          // debug: isDeployPreview,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          // swRegister: false,
          swCustom: require.resolve('./src/sw.js'), // TODO make it possible to use relative path
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
          debug: true, // force debug plugin usage
docs: {
  routeBasePath: '/',
  path: 'docs',
  sidebarPath: 'sidebars.ts',
  editUrl: ({ docPath }) => {
    return `https://github.com/facebook/docusaurus/edit/main/website/docs/${docPath}`;
  },
  admonitions: {
    keywords: ['my-custom-admonition'],
  },
  showLastUpdateAuthor: false,
  showLastUpdateTime: false,
  remarkPlugins: [[npm2yarn, { sync: true }], remarkMath, configTabs],
  rehypePlugins: [rehypeKatex],
  disableVersioning: true,
  onlyIncludeVersions: ['current'],
  versions: {
    current: {
      label: 'Current 🚧',
    },
  },
},
          blog: {
            // routeBasePath: '/',
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
          } satisfies BlogOptions,
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
          } satisfies PageOptions,
          theme: {
            customCss: [
              './src/css/custom.css',],
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
              svgoConfig: undefined, // Use .svgo.config.js
            },
          },
        } satisfies Preset.Options,
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
        id: 'announcementBar-v1',  // 👈 hardcoded ID now
        // Hello PAW Docs user. Welcome to inspect element :)
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
      // metadata: [{name: 'twitter:card', content: 'summary'}],
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

        ]
          // TODO fix type
          .filter(Boolean) as NonNullable<
          Preset.ThemeConfig['navbar']
        >['items'],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Get Started',
            items: [
              {
                label: 'Set Up a PAW Wallet',
                to: '/set-up-a-paw-wallet',
              },
              {
                label: 'How To Obtain $PAW',
                to: '/how-to-obtain-paw',
              },
              {
                label: 'Connect to PAW Swap',
                to: '/connecting-to-paw-swap',
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
            // Don't remove the privacy and terms, it's a legal requirement.
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
    } satisfies Preset.ThemeConfig,
  } satisfies Config;
}
