import React from 'react';

import { ReactComponent as LogoIcon } from '../../icons/logoMain.svg';

import MenuBurger from 'components/MenuBurger';

import * as s from './Header.styled';

const Header = () => {
  return (
    <s.Header>
      <a
        href="https://alessioitaliano.github.io/ape-nft/"
        rel="noopener noreferrer nofollow"
      >
        <s.IconContainer>
          <LogoIcon />
        </s.IconContainer>
      </a>
      <MenuBurger />
    </s.Header>
  );
};

export default Header;
