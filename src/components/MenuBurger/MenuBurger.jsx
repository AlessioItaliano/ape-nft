import MenuLink from 'components/MenuLink';
import MenuNav from 'components/MenuNav';

import * as s from './MenuBurger.styled';

const MenuBurger = () => {
  return (
    <s.Container>
      <MenuNav />
      <MenuLink />
    </s.Container>
  );
};

export default MenuBurger;
