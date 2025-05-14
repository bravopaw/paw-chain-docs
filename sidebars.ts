/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


//
//
//
// SEE 'SIDEBAR backupfiles' In MAIN DIRECTORY FOR REMOVED CONTENTS
//
//
//


import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'getting-started/set-up-a-paw-wallet',
        'getting-started/accessing-paw-chain-mainnet',
        'getting-started/supported-wallets',
        'getting-started/how-to-obtain-paw',
        'getting-started/connecting-to-paw-swap',
      ],
    },
    {
      type: 'category',
      label: 'Technology Overview',
      link: {
        type: 'generated-index',
        title: 'Technology Overview',
        description:
          "Explore the foundation of PAW Chain — a custom-built Layer 3 blockchain focused on speed, scalability, and real-world application. This section outlines what makes PAW Chain distinct and how its architecture simplifies decentralised finance.",
        keywords: ['Technology Overview'],
        image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'category',
          label: 'Cross-Chain Interoperability',
          link: {
            type: 'generated-index',
            title: 'Cross-Chain Interoperability',
            description:
              "Understand how PAW Chain enables unified cross-chain swaps, asset movement, and liquidity management across multiple networks. Learn how Layer 3 removes the complexity of traditional bridges and router systems.",
            keywords: ['Delegators'],
            image: '/img/docusaurus.png',
          },

          items: [
            {
              type: 'doc',
              id: 'Cross-chain Interoperability/Integrated Blockchains',
              label: 'Integrated Blockchains',
            },
            {
              type: 'doc',
              id: 'Cross-chain Interoperability/Universal Protocols and Bridges',
              label: 'Using Crowdin',
            },
          ],
        },
        {
          type: 'category',
          label: 'Technology Stack',
          link: {
            type: 'generated-index',
            title: 'Technology Stack',
            description:
              "Dive into the technical design behind PAW Chain, including its Redis-backed ledger, edge-routing validator logic, and flexible architecture. This section explains how the stack delivers both performance and long-term scalability.",
            keywords: ['Delegators'],
            image: '/img/docusaurus.png',
          },
          items: [
            'techstack/node-js-typescript-core',
            'techstack/redisledger',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Ecosystem',
      link: {
        type: 'generated-index',
        title: 'Ecosystem',
        description:
            "Browse the core applications that make up the PAW Chain ecosystem — from token swapping and wallet management to liquidity locking and cross-chain onboarding. Each product is built to work independently or as part of a unified Layer 3 experience.",
        keywords: ['Technology Overview'],
        image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'category',
          label: 'PAW Swap',
          link: {
            type: 'generated-index',
            title: 'PAW Swap',
            description:
                "Access documentation for PAW Swap, PAW Chain’s dedicated cross-chain trading platform. Learn how to perform swaps, manage slippage, switch networks, and explore supported assets through an intuitive interface.",
            keywords: ['Delegators'],
            image: '/img/docusaurus.png',
          },
          items: [
            {
              type: 'doc',
              id: 'ecosystem/swap/paw-swap-introduction',
              label: 'Introduction',
            },
            {
              type: 'doc',
              id: 'ecosystem/swap/swap-features',
              label: 'Features',
            },
            {
              type: 'doc',
              id: 'ecosystem/swap/connect-wallet-swap',
              label: 'Connect Wallet',
            },
            {
              type: 'doc',
              id: 'ecosystem/swap/switch-networks',
              label: 'Switch Networks',
            },
            {
              type: 'doc',
              id: 'ecosystem/swap/perform-swap',
              label: 'Perform a Swap',
            },
            {
              type: 'doc',
              id: 'ecosystem/swap/slippage-and-deadline',
              label: 'Slippage & tx Deadlines',
            },
          ],
        }, //swap
        {
          type: 'category',
          label: 'PAW Wallet',
          link: {
            type: 'generated-index',
            title: 'PAW Wallet',
            description:
                "Learn how to create and use PAW Wallet — a multi-chain, privacy-focused wallet with built-in support for swaps, bridging, and .paw usernames. Includes guides for setup, recovery, and developer functions.\n",
            keywords: ['Delegators'],
            image: '/img/docusaurus.png',
          },
          items: [
            {
              type: 'doc',
              id: 'ecosystem/wallet/paw-wallet-introduction',
              label: 'Introduction',
            },
            {
              type: 'doc',
              id: 'ecosystem/wallet/create-wallet',
              label: 'Create a Wallet',
            },
            {
              type: 'doc',
              id: 'ecosystem/wallet/perform-bridge',
              label: 'Perform a Bridge',
            },
            {
              type: 'doc',
              id: 'ecosystem/wallet/perform-in-wallet-swap',
              label: 'Perform In-Wallet Swap',
            },
            {
              type: 'doc',
              id: 'ecosystem/wallet/paw-usernames',
              label: 'Usernames',
            },
            {
              type: 'doc',
              id: 'ecosystem/wallet/developer-mode',
              label: 'Dev Mode',
            },
          ],
        }, //wallet
        {
          type: 'category',
          label: 'PAW Scanner',
          link: {
            type: 'generated-index',
            title: 'PAW Scanner',
            description:
                "Understand how to use PAW Scanner to monitor network activity, explore tokens, and track real-time blockchain data across PAW Chain. Includes guidance on searching transactions, reviewing blocks, and navigating token pages.\n",
            keywords: ['Delegators'],
            image: '/img/docusaurus.png',
          },
          items: [
            {
              type: 'doc',
              id: 'ecosystem/scanner/paw-scanner-introduction',
              label: 'Intro',
            },
            {
              type: 'doc',
              id: 'ecosystem/scanner/search-transactions',
              label: 'Search',
            },
            {
              type: 'doc',
              id: 'ecosystem/scanner/search-tokens',
              label: 'search',
            },
            {
              type: 'doc',
              id: 'ecosystem/scanner/view-blocks',
              label: 'blocks',
            },
          ],
        }, //scanner
        {
          type: 'category',
          label: 'PAW Locker',
          link: {
            type: 'generated-index',
            title: 'PAW Locker',
            description:
                "Explore the security-focused tools in PAW Locker, including liquidity locks and upcoming features like team token locks and multisender distributions. Designed to support transparency and protect early communities.\n",
            keywords: ['Delegators'],
            image: '/img/docusaurus.png',
          },
          items: [
            {
              type: 'doc',
              id: 'ecosystem/locker/paw-locker-features',
              label: 'locker features',
            },
          ],
        }, //locker
        {
          type: 'category',
          label: 'PAW Launchpad',
          link: {
            type: 'generated-index',
            title: 'PAW Launchpad',
            description:
                "Review the process for onboarding a token to PAW Chain using the Launchpad. From authentication to developer mode and bridging, this section covers everything needed to deploy a token cross-chain on Layer 3.\n",
            keywords: ['Delegators'],
            image: '/img/docusaurus.png',
          },
          items: [
            {
              type: 'doc',
              id: 'ecosystem/launchpad/launch-token',
              label: 'launch',
            },
          ],
        },   //launchpad
      ],
    },

    {
      type: 'category',
      label: 'PAW Chain Validation',
      link: {type: 'doc', id: 'validation/validation-overview'},
      items: [
        'validation/validator-incentive-mechanism',
        'validation/real-time-block-minting',
        'validation/validator-driven-block-sizes',
        'validation/validator-architecture',
        'validation/proposer-consensus-and-selection-mechanism',
        {
          type: 'category',
          label: 'Delegators',
          link: {
            type: 'generated-index',
            title: 'Delegators',
            description:
              "Learn how PAW Chain’s delegation model works, including how users can support validators by delegating tokens. This section will cover requirements, reward distribution, and validator selection.\n",
            keywords: ['Delegators'],
            image: '/img/docusaurus.png',
          },
          items: [
            'validation/Delegators/choosing-a-validator',
            'validation/Delegators/delegation-yield',
            'validation/Delegators/unlock-periods',
            'validation/Delegators/penalties',
          ],
        },
        'validation/validators-and-lockers',
        'validation/redis-database-system',
        'validation/cross-stitching',
      ],
    },
    {
      type: 'category',
      label: 'Tokenomics',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'tokenomics/supply-and-distribution',
      ],
    },
    {
      type: 'category',
      label: 'Treasury Management',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'treasury-mechanism/paw-chain-fee-structure',
      ],
    },
    {
      type: 'category',
      label: 'Community and Support',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'community-and-support/join-the-community',
        'community-and-support/paw-chain-faq',
        'community-and-support/common-issues-and-fixes',
        'community-and-support/paw-chain-glossary',
      ],
    },
    {
      type: 'category',
      label: 'Legal and Compliance',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'legal-and-compliance/terms-of-use',
        'legal-and-compliance/privacy-policy',
        'legal-and-compliance/compliance-and-regulatory-disclosures',
      ],
    },
  ],
};

export default sidebars;

//
//
//
// SEE 'SIDEBAR backupfiles' In MAIN DIRECTORY FOR REMOVED CONTENTS
//
//
//
