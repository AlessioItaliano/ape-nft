import Container from 'components/Container';
import CopyRight from 'components/CopyRight';

import * as s from './Footer.styled';

const Footer = () => {
  return (
    <s.Footer>
      <Container>
        <CopyRight />
      </Container>
    </s.Footer>
  );
};

export default Footer;
