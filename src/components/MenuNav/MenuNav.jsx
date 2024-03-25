import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import MenuNavList from 'components/MenuNavList';
import MenuMobile from 'components/MenuMobile';

import { vars } from 'stylesheet/variables';

import * as s from './MenuNav.styled';

const MenuNav = ({ theme }) => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const isMobile = useMediaQuery({
    query: `(max-width: ${vars.breakpoints.mobileMax})`,
  });

  useEffect(() => {
    setShowBurgerMenu(isMobile);
  }, [isMobile]);

  const handleOpenMenu = () => {
    setIsOpenNavMenu(prevState => !prevState);
    if (!isOpenNavMenu && showBurgerMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <s.Container theme={theme}>
      <s.Button type="button" theme={theme} onClick={handleOpenMenu}>
        {!isOpenNavMenu ? 'Menu' : 'Close'}
      </s.Button>
      {isOpenNavMenu ? (
        showBurgerMenu ? (
          <MenuMobile onClose={handleOpenMenu} />
        ) : (
          <MenuNavList type="header" theme={theme} onClose={handleOpenMenu} />
        )
      ) : null}
    </s.Container>
  );
};

export default MenuNav;
