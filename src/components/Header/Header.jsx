import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import HeaderMenu from 'components/HeaderMenu';
import HeaderLogo from 'components/HeaderLogo';

import { vars } from 'stylesheet/variables';

import * as s from './Header.styled';

const Header = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${vars.breakpoints.desktop})`,
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDesktop) {
        if (window.scrollY > 680) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop]);

  return (
    <s.Header $scrolled={isScrolled ? 'true' : null}>
      <HeaderLogo theme="dark" $scrolled={isScrolled ? 'true' : null} />
      <HeaderMenu theme={isScrolled ? 'light' : 'dark'} />
    </s.Header>
  );
};

export default Header;
