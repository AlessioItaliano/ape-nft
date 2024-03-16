import React from 'react';

import { ReactComponent as LogoIcon } from '../../icons/logoMain.svg';
// import { ReactComponent as YouTubeIcon } from '../../icons/youtube.svg';

import * as s from './Header.styled';

const Header = () => {
  return (
    <s.Header>
      <s.Logo href="#">
        <LogoIcon />
      </s.Logo>
    </s.Header>
  );
};

export default Header;
