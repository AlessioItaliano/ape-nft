import MenuSocialLinks from 'components/MenuSocialLinks';
import MenuNav from 'components/MenuNav';

import * as s from './HeaderMenu.styled';

const HeaderMenu = () => {
  return (
    <s.Container>
      <MenuNav />
      <MenuSocialLinks theme="dark" />
    </s.Container>
  );
};

export default HeaderMenu;
