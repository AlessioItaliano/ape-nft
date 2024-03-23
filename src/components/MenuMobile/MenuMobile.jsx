import { createPortal } from 'react-dom';

import Container from 'components/Container';
import HeaderLogo from 'components/HeaderLogo';
import CopyRight from 'components/CopyRight';
import MenuSocialLinks from 'components/MenuSocialLinks';
import MenuNavList from 'components/MenuNavList';

import * as s from './MenuMobile.styled';

const BurgerMenuRoot = document.getElementById('MenuBurger');

const MenuMobile = ({ onClose }) => {
  return createPortal(
    <s.Field>
      <s.MainContainer>
        <HeaderLogo theme="light" />

        <s.LinksContainer>
          <s.CloseButton onClick={onClose} aria-label="Close mobile menu">
            Close
          </s.CloseButton>
          <MenuSocialLinks theme="light" />
        </s.LinksContainer>
      </s.MainContainer>

      <Container>
        <s.NavContainer>
          <MenuNavList type="mobile" onClose={onClose} />
          <CopyRight />
        </s.NavContainer>
      </Container>
    </s.Field>,

    BurgerMenuRoot
  );
};

export default MenuMobile;
