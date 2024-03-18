import Title from 'components/Title';
import MintForm from 'components/MintForm';

import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import * as s from './Mint.styled';

const Mint = () => {
  return (
    <s.Container>
      <Title name="Are you in?" />
      <s.DescriptionContainer>
        <s.IconContainer>
          <CloseIcon />
        </s.IconContainer>

        <s.Description>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </s.Description>
      </s.DescriptionContainer>

      <MintForm />
    </s.Container>
  );
};

export default Mint;
