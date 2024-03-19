import Title from 'components/Title';

import * as s from './Faq.styled';

const Faq = () => {
  return (
    <s.Container>
      <Title name="Faq" />
      <s.List>
        <s.Item>
          <s.DescriptionContainer>
            <s.Main>WHAT IS AN NFT COLLECTION?</s.Main>
            <s.Description>
              An NFT collection is a group of unique digital assets, each
              represented by a non-fungible token, typically created around a
              specific theme or style.
            </s.Description>
          </s.DescriptionContainer>
        </s.Item>

        <s.Item>
          <s.DescriptionContainer>
            <s.Main>HOW DO I PURCHASE NFTS FROM A COLLECTION?</s.Main>
            <s.Description>
              To purchase nfts from a collection, you typically need to use
              cryptocurrency on a blockchain0based marketplace.
            </s.Description>
          </s.DescriptionContainer>
        </s.Item>

        <s.Item>
          <s.DescriptionContainer>
            <s.Main>CAN I SELL OR TRADE NFTS FROM A COLLECTION?</s.Main>
            <s.Description>
              Yes, you can sell or trade NFTs from a collection like you would
              other digital assets.
            </s.Description>
          </s.DescriptionContainer>
        </s.Item>

        <s.Item>
          <s.DescriptionContainer>
            <s.Main>WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?</s.Main>
            <s.Description>
              As an NFT owner, you can own, transfer, potentially access
              exclusive content, resell, but don't automatically get copyright
              or intellectual property rights.
            </s.Description>
          </s.DescriptionContainer>
        </s.Item>
      </s.List>
    </s.Container>
  );
};

export default Faq;
