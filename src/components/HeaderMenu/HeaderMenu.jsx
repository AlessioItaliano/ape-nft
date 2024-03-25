import MenuSocialLinks from 'components/MenuSocialLinks';
import MenuNav from 'components/MenuNav';

import * as s from './HeaderMenu.styled';

const HeaderMenu = ({ theme }) => {
  return (
    <s.Container>
      <MenuNav theme={theme} />
      <MenuSocialLinks theme={theme} />
    </s.Container>
  );
};

export default HeaderMenu;
