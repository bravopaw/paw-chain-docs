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
        title: 'Docusaurus Guides',
        description:
          "Let's learn about the most important Docusaurus concepts!",
        keywords: ['Technology Overview'],
        image: '/img/docusaurus.png',
      },
      items: [
        {
          type: 'category',
          label: 'Cross-Chain Interoperability',
          link: {
            type: 'generated-index',
            title: 'Docusaurus Guides',
            description:
              "Let's learn about the most important Docusaurus concepts!",
            keywords: ['Delegators'],
            image: '/img/docusaurus.png',
          },
          items: [
            {
              type: 'doc',
              id: 'Cross-chain Interoperability/Integrated Blockchains',
              label: 'Tutorial',
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
            title: 'Docusaurus Guides',
            description:
              "Let's learn about the most important Docusaurus concepts!",
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
      label: 'PAW Chain Validation',
      link: {type: 'doc', id: 'validation/validation-overview'},
      items: [
        'validation/validation-overview',
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
            title: 'Docusaurus Guides',
            description:
              "Let's learn about the most important Docusaurus concepts!",
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
