import { ReactComponent as LogoIcon } from 'icons/logoMain.svg';

import * as s from './HeaderLogo.styled';

const HeaderLogo = ({ theme }) => {
  return (
    <a
      href="https://alessioitaliano.github.io/ape-nft/"
      rel="noopener noreferrer nofollow"
      aria-label="Company logo"
    >
      <s.Container>
        <s.Box theme={theme}>
          <LogoIcon />
        </s.Box>
      </s.Container>
    </a>
  );
};

export default HeaderLogo;
