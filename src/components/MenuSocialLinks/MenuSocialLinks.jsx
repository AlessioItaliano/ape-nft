import { ReactComponent as DiscordIcon } from '../../icons/discord.svg';
import { ReactComponent as OpenSeaIcon } from '../../icons/logoOpenSea.svg';
import { ReactComponent as XIcon } from '../../icons/logoX.svg';

import * as s from './MenuSocialLinks.styled';

const MenuSocialLinks = ({ theme }) => {
  return (
    <s.Container>
      <s.Link
        theme={theme}
        href="https://discord.com/"
        rel="noopener noreferrer nofollow"
        aria-label="Link to company discord page"
      >
        <s.Box>
          <DiscordIcon />
        </s.Box>
      </s.Link>
      <s.Link
        theme={theme}
        href="https://opensea.io/"
        rel="noopener noreferrer nofollow"
        aria-label="Link to company opensea page"
      >
        <s.Box>
          <OpenSeaIcon />
        </s.Box>
      </s.Link>
      <s.Link
        theme={theme}
        href="https://twitter.com/"
        rel="noopener noreferrer nofollow"
        aria-label="Link to company twitter page"
      >
        <s.Box>
          <XIcon />
        </s.Box>
      </s.Link>
    </s.Container>
  );
};

export default MenuSocialLinks;
