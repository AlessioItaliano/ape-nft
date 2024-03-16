import React from 'react';

import { ReactComponent as LogoIcon } from '../../icons/logoMain.svg';

import MenuBurger from 'components/MenuBurger';

import * as s from './Header.styled';

const Header = () => {
  return (
    <s.Header>
      <s.Logo href="#">
        <LogoIcon />
      </s.Logo>
      <MenuBurger />
    </s.Header>
  );
};

export default Header;
