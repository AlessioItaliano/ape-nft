import { createPortal } from 'react-dom';

import { ReactComponent as LogoIcon } from '../../icons/logoMain.svg';
import { ReactComponent as DiscordIcon } from '../../icons/discord.svg';
import { ReactComponent as OpenSeaIcon } from '../../icons/logoOpenSea.svg';
import { ReactComponent as XIcon } from '../../icons/logoX.svg';

import * as s from './ModalBurgerMenu.styled';

const BurgerMenuRoot = document.getElementById('MenuBurger');

const ModalBurgerMenu = ({ onClose }) => {
  return createPortal(
    <s.Field>
      <s.MainContainer>
        <s.Logo href="#">
          <LogoIcon />
        </s.Logo>
        <s.LinkContainer>
          <s.CloseButton onClick={onClose} aria-label="Close menu">
            Close
          </s.CloseButton>
          <s.Link
            href="https://discord.com/"
            aria-label="Visit company discord page"
          >
            <DiscordIcon />
          </s.Link>
          <s.Link
            href="https://opensea.io/"
            aria-label="Visit company opensea page"
          >
            <OpenSeaIcon />
          </s.Link>
          <s.Link
            href="https://twitter.com/"
            aria-label="Visit company twitter page"
          >
            <XIcon />
          </s.Link>
        </s.LinkContainer>
      </s.MainContainer>
      <s.NavContainer>
        <s.Nav>
          <s.List>
            <s.Item>
              <s.AnhorLink href="#about" onClick={onClose}>
                About
              </s.AnhorLink>
            </s.Item>
            <s.Item>
              <s.AnhorLink href="#m-map" onClick={onClose}>
                M-map
              </s.AnhorLink>
            </s.Item>
            <s.Item>
              <s.AnhorLink href="#faq" onClick={onClose}>
                Faq
              </s.AnhorLink>
            </s.Item>
            <s.Item>
              <s.AnhorLink href="#arts" onClick={onClose}>
                Arts
              </s.AnhorLink>
            </s.Item>
            <s.Item>
              <s.AnhorLink href="#mint" onClick={onClose}>
                Mint
              </s.AnhorLink>
            </s.Item>
          </s.List>
        </s.Nav>

        <s.CopyRight>© Yacht ape 2024 all rights reserved</s.CopyRight>
      </s.NavContainer>
    </s.Field>,

    BurgerMenuRoot
  );
};

export default ModalBurgerMenu;
