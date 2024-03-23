import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import MenuNavList from 'components/MenuNavList';
import MenuMobile from 'components/MenuMobile';

import { vars } from 'stylesheet/variables';

import * as s from './MenuNav.styled';

const MenuNav = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  // const isMobile = useMediaQuery({
  //   query: `(max-width: ${vars.breakpoints.tablet} - 1px)`,
  // });

  const isMobile = useMediaQuery({
    query: `(max-width: ${vars.breakpoints.mobileMax})`,
  });

  useEffect(() => {
    setShowBurgerMenu(isMobile);
  }, [isMobile]);

  const handleClickOpenNavMenu = () => {
    setIsOpenNavMenu(prevState => !prevState);
    if (!isOpenNavMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <s.Container>
      <s.Button type="button" onClick={handleClickOpenNavMenu}>
        {!isOpenNavMenu ? 'Menu' : 'Close'}
      </s.Button>
      {isOpenNavMenu ? (
        showBurgerMenu ? (
          <MenuMobile onClose={handleClickOpenNavMenu} />
        ) : (
          <MenuNavList type="header" onClose={handleClickOpenNavMenu} />
        )
      ) : null}
    </s.Container>
  );
};

export default MenuNav;
