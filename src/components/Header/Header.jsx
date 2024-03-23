import HeaderMenu from 'components/HeaderMenu';
import HeaderLogo from 'components/HeaderLogo';

import * as s from './Header.styled';

const Header = () => {
  return (
    <s.Header>
      <HeaderLogo theme="dark" />
      <HeaderMenu />
    </s.Header>
  );
};

export default Header;
