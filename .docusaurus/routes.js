import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh-CN/__docusaurus/debug',
    component: ComponentCreator('/zh-CN/__docusaurus/debug', 'eea'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/config',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/config', 'f62'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/content',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/content', '8d9'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/globalData',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/globalData', 'f48'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/metadata',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/metadata', '3eb'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/registry',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/registry', 'dee'),
    exact: true
  },
  {
    path: '/zh-CN/__docusaurus/debug/routes',
    component: ComponentCreator('/zh-CN/__docusaurus/debug/routes', '3c3'),
    exact: true
  },
  {
    path: '/zh-CN/examples/markdownPageExample',
    component: ComponentCreator('/zh-CN/examples/markdownPageExample', '6b1'),
    exact: true
  },
  {
    path: '/zh-CN/feature-requests',
    component: ComponentCreator('/zh-CN/feature-requests', '49c')
  },
  {
    path: '/zh-CN/search',
    component: ComponentCreator('/zh-CN/search', '4e2'),
    exact: true
  },
  {
    path: '/zh-CN/showcase',
    component: ComponentCreator('/zh-CN/showcase', '05f'),
    exact: true
  },
  {
    path: '/zh-CN/versions',
    component: ComponentCreator('/zh-CN/versions', '52b'),
    exact: true
  },
  {
    path: '/zh-CN/',
    component: ComponentCreator('/zh-CN/', '36c'),
    routes: [
      {
        path: '/zh-CN/',
        component: ComponentCreator('/zh-CN/', '6b0'),
        routes: [
          {
            path: '/zh-CN/',
            component: ComponentCreator('/zh-CN/', 'e0e'),
            routes: [
              {
                path: '/zh-CN/category/community-and-support',
                component: ComponentCreator('/zh-CN/category/community-and-support', 'c1e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/category/cross-chain-interoperability',
                component: ComponentCreator('/zh-CN/category/cross-chain-interoperability', '8f8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/category/delegators',
                component: ComponentCreator('/zh-CN/category/delegators', 'c42'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/category/getting-started',
                component: ComponentCreator('/zh-CN/category/getting-started', 'eca'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/category/legal-and-compliance',
                component: ComponentCreator('/zh-CN/category/legal-and-compliance', '9e0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/category/technology-overview',
                component: ComponentCreator('/zh-CN/category/technology-overview', '35d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/category/technology-stack',
                component: ComponentCreator('/zh-CN/category/technology-stack', 'b3f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/category/tokenomics',
                component: ComponentCreator('/zh-CN/category/tokenomics', 'f51'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/category/treasury-management',
                component: ComponentCreator('/zh-CN/category/treasury-management', '736'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/community-and-support/common-issues-and-fixes',
                component: ComponentCreator('/zh-CN/community-and-support/common-issues-and-fixes', '3ef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/community-and-support/join-the-community',
                component: ComponentCreator('/zh-CN/community-and-support/join-the-community', '981'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/community-and-support/paw-chain-faq',
                component: ComponentCreator('/zh-CN/community-and-support/paw-chain-faq', '132'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/community-and-support/paw-chain-glossary',
                component: ComponentCreator('/zh-CN/community-and-support/paw-chain-glossary', '867'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/cross-chain-interoperability/Integrated-Blockchains',
                component: ComponentCreator('/zh-CN/cross-chain-interoperability/Integrated-Blockchains', '1e3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/cross-chain-interoperability/introduction',
                component: ComponentCreator('/zh-CN/cross-chain-interoperability/introduction', '5ab'),
                exact: true
              },
              {
                path: '/zh-CN/cross-chain-interoperability/Universal-Protocols-and-Bridges',
                component: ComponentCreator('/zh-CN/cross-chain-interoperability/Universal-Protocols-and-Bridges', 'c41'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/ecosystem/chain/consensus',
                component: ComponentCreator('/zh-CN/ecosystem/chain/consensus', '55e'),
                exact: true
              },
              {
                path: '/zh-CN/ecosystem/chain/infinite-scaling',
                component: ComponentCreator('/zh-CN/ecosystem/chain/infinite-scaling', '1f8'),
                exact: true
              },
              {
                path: '/zh-CN/ecosystem/chain/liquidity-provisioning',
                component: ComponentCreator('/zh-CN/ecosystem/chain/liquidity-provisioning', '059'),
                exact: true
              },
              {
                path: '/zh-CN/ecosystem/chain/paw-chain-introduction',
                component: ComponentCreator('/zh-CN/ecosystem/chain/paw-chain-introduction', 'e6d'),
                exact: true
              },
              {
                path: '/zh-CN/ecosystem/swap/how-it-works',
                component: ComponentCreator('/zh-CN/ecosystem/swap/how-it-works', 'ea0'),
                exact: true
              },
              {
                path: '/zh-CN/ecosystem/swap/paw-swap-introduction',
                component: ComponentCreator('/zh-CN/ecosystem/swap/paw-swap-introduction', '76f'),
                exact: true
              },
              {
                path: '/zh-CN/ecosystem/swap/paw-swap-lite',
                component: ComponentCreator('/zh-CN/ecosystem/swap/paw-swap-lite', '198'),
                exact: true
              },
              {
                path: '/zh-CN/ecosystem/wallet/how-it-works',
                component: ComponentCreator('/zh-CN/ecosystem/wallet/how-it-works', '359'),
                exact: true
              },
              {
                path: '/zh-CN/ecosystem/wallet/multi-asset-wallet-features',
                component: ComponentCreator('/zh-CN/ecosystem/wallet/multi-asset-wallet-features', '420'),
                exact: true
              },
              {
                path: '/zh-CN/ecosystem/wallet/paw-wallet-introduction',
                component: ComponentCreator('/zh-CN/ecosystem/wallet/paw-wallet-introduction', '7bd'),
                exact: true
              },
              {
                path: '/zh-CN/getting-started/accessing-paw-chain-mainnet',
                component: ComponentCreator('/zh-CN/getting-started/accessing-paw-chain-mainnet', 'a24'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/getting-started/connecting-to-paw-swap',
                component: ComponentCreator('/zh-CN/getting-started/connecting-to-paw-swap', '013'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/getting-started/how-to-obtain-paw',
                component: ComponentCreator('/zh-CN/getting-started/how-to-obtain-paw', '3d8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/getting-started/set-up-a-paw-wallet',
                component: ComponentCreator('/zh-CN/getting-started/set-up-a-paw-wallet', '8fc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/getting-started/supported-wallets',
                component: ComponentCreator('/zh-CN/getting-started/supported-wallets', 'e8c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/guides/docs/sidebar',
                component: ComponentCreator('/zh-CN/guides/docs/sidebar', 'ba3'),
                exact: true
              },
              {
                path: '/zh-CN/legal-and-compliance/compliance-and-regulatory-disclosures',
                component: ComponentCreator('/zh-CN/legal-and-compliance/compliance-and-regulatory-disclosures', '05d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/legal-and-compliance/privacy-policy',
                component: ComponentCreator('/zh-CN/legal-and-compliance/privacy-policy', '637'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/legal-and-compliance/terms-of-use',
                component: ComponentCreator('/zh-CN/legal-and-compliance/terms-of-use', '57a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/sidebar/autogenerated',
                component: ComponentCreator('/zh-CN/sidebar/autogenerated', 'd9d'),
                exact: true
              },
              {
                path: '/zh-CN/sidebar/items',
                component: ComponentCreator('/zh-CN/sidebar/items', '578'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/sidebar/multiple-sidebars',
                component: ComponentCreator('/zh-CN/sidebar/multiple-sidebars', '0b8'),
                exact: true
              },
              {
                path: '/zh-CN/techstack/node-js-typescript-core',
                component: ComponentCreator('/zh-CN/techstack/node-js-typescript-core', '872'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/techstack/redis-ledger',
                component: ComponentCreator('/zh-CN/techstack/redis-ledger', 'c9b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/tokenomics/paw-coin-overview',
                component: ComponentCreator('/zh-CN/tokenomics/paw-coin-overview', '264'),
                exact: true
              },
              {
                path: '/zh-CN/tokenomics/supply-and-distribution',
                component: ComponentCreator('/zh-CN/tokenomics/supply-and-distribution', '05e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/tokenomics/utility-and-governance',
                component: ComponentCreator('/zh-CN/tokenomics/utility-and-governance', '17a'),
                exact: true
              },
              {
                path: '/zh-CN/treasury-mechanism/paw-chain-fee-structure',
                component: ComponentCreator('/zh-CN/treasury-mechanism/paw-chain-fee-structure', 'fc3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/treasury-mechanism/treasury-owned-liquidity',
                component: ComponentCreator('/zh-CN/treasury-mechanism/treasury-owned-liquidity', 'c96'),
                exact: true
              },
              {
                path: '/zh-CN/validation/cross-stitching',
                component: ComponentCreator('/zh-CN/validation/cross-stitching', '3c2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/validation/delegators/choosing-a-validator',
                component: ComponentCreator('/zh-CN/validation/delegators/choosing-a-validator', 'ccf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/validation/delegators/delegation-yield',
                component: ComponentCreator('/zh-CN/validation/delegators/delegation-yield', '422'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/validation/delegators/penalties',
                component: ComponentCreator('/zh-CN/validation/delegators/penalties', '28c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/validation/delegators/unlock-periods',
                component: ComponentCreator('/zh-CN/validation/delegators/unlock-periods', '298'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/validation/overview',
                component: ComponentCreator('/zh-CN/validation/overview', 'e00'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/validation/proposer-consensus-and-selection-mechanism',
                component: ComponentCreator('/zh-CN/validation/proposer-consensus-and-selection-mechanism', '2be'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/validation/real-time-block-minting',
                component: ComponentCreator('/zh-CN/validation/real-time-block-minting', '361'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/validation/redis-database-system',
                component: ComponentCreator('/zh-CN/validation/redis-database-system', '021'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/validation/validator-architecture',
                component: ComponentCreator('/zh-CN/validation/validator-architecture', 'dd1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/validation/validator-driven-block-sizes',
                component: ComponentCreator('/zh-CN/validation/validator-driven-block-sizes', '62d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/validation/validator-incentive-mechanism',
                component: ComponentCreator('/zh-CN/validation/validator-incentive-mechanism', '19c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/validation/validators-and-lockers',
                component: ComponentCreator('/zh-CN/validation/validators-and-lockers', '52b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/zh-CN/',
                component: ComponentCreator('/zh-CN/', 'cbf'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
