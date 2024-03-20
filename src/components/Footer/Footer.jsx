import Container from 'components/Container';
import * as s from './Footer.styled';
import CopyRight from 'components/CopyRight';

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
