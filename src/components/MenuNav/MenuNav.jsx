import React, { useState, useEffect } from 'react';

import ModalBurgerMenu from 'components/ModalBurgerMenu';
import MenuNavList from 'components/MenuNavList';

import * as s from './MenuNav.styled';

const MenuNav = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  useEffect(() => {
    const autoResize = () => {
      setShowBurgerMenu(window.innerWidth <= 768);
    };

    autoResize();

    window.addEventListener('resize', autoResize);

    return () => {
      window.removeEventListener('resize', autoResize);
    };
  }, []);

  const handleClickOpenNavMenu = () => {
    setIsOpenNavMenu(prevState => !prevState);
    // if (!isOpenNavMenu) {
    //   document.body.style.overflow = 'hidden';
    // } else {
    //   document.body.style.overflow = 'auto';
    // }
  };

  return (
    <s.Container>
      <s.Button type="button" onClick={handleClickOpenNavMenu}>
        {!isOpenNavMenu ? 'Menu' : 'Close'}
      </s.Button>
      {isOpenNavMenu ? (
        showBurgerMenu ? (
          <ModalBurgerMenu onClose={handleClickOpenNavMenu} />
        ) : (
          <MenuNavList />
        )
      ) : null}
    </s.Container>
  );
};

export default MenuNav;
