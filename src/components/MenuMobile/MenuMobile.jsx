import { createPortal } from 'react-dom';

import HeaderLogo from 'components/HeaderLogo';
import CopyRight from 'components/CopyRight';
import MenuSocialLinks from 'components/MenuSocialLinks';
import MenuNavList from 'components/MenuNavList';

import * as s from './MenuMobile.styled';

const BurgerMenuRoot = document.getElementById('MenuBurger');

const MenuMobile = ({ onClose}) => {
  return createPortal(
    <s.Field>
      <s.Container>
        <s.ContainerHeader>
          <HeaderLogo theme="light" />

          <s.LinksContainer>
            <s.CloseButton onClick={onClose} aria-label="Close mobile menu">
              Close
            </s.CloseButton>
            <MenuSocialLinks theme="light" />
          </s.LinksContainer>
        </s.ContainerHeader>

        <MenuNavList type="mobile" onClose={onClose} />

        <s.ContainerFooter>
          <CopyRight />
        </s.ContainerFooter>
      </s.Container>
    </s.Field>,

    BurgerMenuRoot
  );
};

export default MenuMobile;
