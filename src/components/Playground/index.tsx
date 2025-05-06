/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import Heading from '@theme/Heading';

const Playgrounds = [
  {
    name: '📦 PAW Swap',
    image: require('@site/static/img/playgrounds/swap-home.png'),
    url: 'https://swap.pawchain.net',
    urlTS: 'https://swap.pawchain.net',
    description: (
      <Translate id="playground.pawswap.description">
        PAW Swap is a decentralized exchange that leverages our Bridge³ function, allowing seamless asset swaps across multiple networks using a simple bridge-swap-bridge mechanism.
      </Translate>
    ),
  },
  {
    name: '📦 PAW Wallet',
    image: require('@site/static/img/playgrounds/wallet-home.png'),
    url: 'https://wallet.pawchain.net',
    urlTS: 'https://wallet.pawchain.net',
    description: (
      <Translate id="playground.pawwallet.description">
        PAW Wallet is a secure and versatile wallet for managing assets, supporting multiple networks, and offering unique features like privacy controls, multisig, and .paw usernames for easy identity management.
      </Translate>
    ),
  },
  {
    name: '📦 PAW Scanner',
    image: require('@site/static/img/playgrounds/scanner-home.png'),
    url: 'https://scanner.pawchain.net',
    urlTS: 'https://scanner.pawchain.net',
    description: (
      <Translate id="playground.pawscanner.description">
        PAW Scanner is a blockchain explorer designed for PAW Chain, offering real-time transaction tracking, block monitoring, and a comprehensive view of network activity, empowering users with transparency.
      </Translate>
    ),
  },
  {
    name: '📦 PAW Locker',
    image: require('@site/static/img/playgrounds/locker-home.png'),
    url: 'https://locker.pawchain.net',
    urlTS: 'https://locker.pawchain.net',
    description: (
      <Translate id="playground.pawlocker.description">
        PAW Locker enables liquidity and team token locks, ensuring secure token management while allowing the distribution of tokens to multiple wallets, enhancing transparency and trust for projects.
      </Translate>
    ),
  },
];

const MorePlaygrounds = [
  {
    name: '💵 PAW Wallet',
    image: require('@site/static/img/playgrounds/pawwallet.webp'),
    url: 'https://wallet.pawchain.net',
    urlTS: 'https://wallet.pawchain.net',
    description: (
      <Translate id="playground.pawswap2.description">
        The official wallet, built specifically for PAW Coin with full ecosystem integration.
      </Translate>
    ),
  },
  {
    name: '💵 MetaMask',
    image: require('@site/static/img/playgrounds/metamask.webp'),
    url: 'https://metamask.io/',
    urlTS: 'https://metamask.io/',
    description: (
      <Translate id="playground.pawwallet2.description">
        An Ethereum-compatible wallet that can be manually configured for PAW Chain.
      </Translate>
    ),
  },
  {
    name: '💵 Trust Wallet',
    image: require('@site/static/img/playgrounds/trustwallet.webp'),
    url: 'https://trustwallet.com/',
    urlTS: 'https://trustwallet.com/',
    description: (
      <Translate id="playground.pawscanner2.description">
        A mobile wallet supporting multiple blockchains, including PAW Chain.
      </Translate>
    ),
  },
  {
    name: '💵Ledger Hardware Wallet',
    image: require('@site/static/img/playgrounds/ledger.webp'),
    url: 'https://www.ledger.com/',
    urlTS: 'https://www.ledger.com/',
    description: (
      <Translate id="playground.pawlocker2.description">
        Securely store your PAW Coin offline with a Ledger device for added security.
      </Translate>
    ),
  },
];

interface Props {
  name: string;
  image: string;
  url: string;
  urlTS: string;
  description: ReactNode;
  hideFooter?: boolean; // ✅ NEW: this will control footer visibility
}

function PlaygroundCard({name, image, url, urlTS, description, hideFooter = false}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={url}>
            <Image img={image} alt={`${name}'s image`} />
          </Link>
        </div>
        <div className="card__body">
          <Heading as="h3">{name}</Heading>
          <p>{description}</p>
        </div>
        {!hideFooter && ( // ✅ Only render the footer if hideFooter is false
          <div className="card__footer">
            <div style={{textAlign: 'center'}}>
              <b>
                <Translate id="playground.tryItButton">Try it now!</Translate>
              </b>
            </div>
            <div className="button-group button-group--block">
              <Link className="button button--secondary" to={url}>
                Read More
              </Link>
              <Link className="button button--secondary" to={urlTS}>
                Visit Platform
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function PlaygroundCardsRow(): ReactNode {
  return (
    <div className="row">
      {Playgrounds.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} />
      ))}
    </div>
  );
}

export function PlaygroundCardsRow2(): ReactNode {
  return (
    <div className="row">
      {MorePlaygrounds.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} hideFooter /> // ✅ Pass the hideFooter prop here
      ))}
    </div>
  );
}
