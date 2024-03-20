import { createPortal } from 'react-dom';

import { ReactComponent as LogoIcon } from '../../icons/logoMain.svg';
import { ReactComponent as DiscordIcon } from '../../icons/discord.svg';
import { ReactComponent as OpenSeaIcon } from '../../icons/logoOpenSea.svg';
import { ReactComponent as XIcon } from '../../icons/logoX.svg';

import Container from 'components/Container';
import CopyRight from 'components/CopyRight';

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
            <s.Box>
              <DiscordIcon />
            </s.Box>
          </s.Link>
          <s.Link
            href="https://opensea.io/"
            aria-label="Visit company opensea page"
          >
            <s.Box>
              <OpenSeaIcon />
            </s.Box>
          </s.Link>
          <s.Link
            href="https://twitter.com/"
            aria-label="Visit company twitter page"
          >
            <s.Box>
              <XIcon />
            </s.Box>
          </s.Link>
        </s.LinkContainer>
      </s.MainContainer>
      <Container>
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

          <CopyRight />
        </s.NavContainer>
      </Container>
    </s.Field>,

    BurgerMenuRoot
  );
};

export default ModalBurgerMenu;
