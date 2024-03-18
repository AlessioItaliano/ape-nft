import { ReactComponent as DiscordIcon } from '../../icons/discord.svg';
import { ReactComponent as OpenSeaIcon } from '../../icons/logoOpenSea.svg';
import { ReactComponent as XIcon } from '../../icons/logoX.svg';

import * as s from './MenuLink.styled';

const MenuLink = () => {
  return (
    <s.Container>
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
    </s.Container>
  );
};

export default MenuLink;
