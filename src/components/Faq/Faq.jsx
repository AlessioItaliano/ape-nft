import { useState } from 'react';
import Title from 'components/Title';

import Ape001_1x from '../../images/appImages/faqApp001-1x.png';
import Ape001_2x from '../../images/appImages/faqApp001-2x.png';
import Ape002_1x from '../../images/appImages/faqApp002-1x.png';
import Ape002_2x from '../../images/appImages/faqApp002-2x.png';
import Ape003_1x from '../../images/appImages/faqApp003-1x.png';
import Ape003_2x from '../../images/appImages/faqApp003-2x.png';
import Ape004_1x from '../../images/appImages/faqApp004-1x.png';
import Ape004_2x from '../../images/appImages/faqApp004-2x.png';

import * as s from './Faq.styled';

const Faq = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <s.Container>
      <Title name="Faq" />
      <s.List>
        <s.Item onClick={() => setActiveItem(1)} isActive={activeItem === 1}>
          <s.ItemContainer>
            <s.ImageContainer>
              <s.Image
                srcSet={`${Ape001_1x} 1x, ${Ape001_2x} 2x`}
                src={Ape001_1x}
                alt="APE_NFT_1"
              />
            </s.ImageContainer>
            <s.DescriptionContainer>
              <s.Main>WHAT IS AN NFT COLLECTION?</s.Main>
              <s.Description>
                An NFT collection is a group of unique digital assets, each
                represented by a non-fungible token, typically created around a
                specific theme or style.
              </s.Description>
            </s.DescriptionContainer>
          </s.ItemContainer>
        </s.Item>

        <s.Item onClick={() => setActiveItem(2)} isActive={activeItem === 2}>
          <s.ItemContainer>
            <s.ImageContainer>
              <s.Image
                srcSet={`${Ape002_1x} 1x, ${Ape002_2x} 2x`}
                src={Ape002_1x}
                alt="APE_NFT_2"
              />
            </s.ImageContainer>
            <s.DescriptionContainer>
              <s.Main>HOW DO I PURCHASE NFTS FROM A COLLECTION?</s.Main>
              <s.Description>
                To purchase nfts from a collection, you typically need to use
                cryptocurrency on a blockchain0based marketplace.
              </s.Description>
            </s.DescriptionContainer>
          </s.ItemContainer>
        </s.Item>

        <s.Item onClick={() => setActiveItem(3)} isActive={activeItem === 3}>
          <s.ItemContainer>
            <s.ImageContainer>
              <s.Image
                srcSet={`${Ape003_1x} 1x, ${Ape003_2x} 2x`}
                src={Ape003_1x}
                alt="APE_NFT_3"
              />
            </s.ImageContainer>
            <s.DescriptionContainer>
              <s.Main>CAN I SELL OR TRADE NFTS FROM A COLLECTION?</s.Main>
              <s.Description>
                Yes, you can sell or trade NFTs from a collection like you would
                other digital assets.
              </s.Description>
            </s.DescriptionContainer>
          </s.ItemContainer>
        </s.Item>

        <s.Item onClick={() => setActiveItem(4)} isActive={activeItem === 4}>
          <s.ItemContainer>
            <s.ImageContainer>
              <s.Image
                srcSet={`${Ape004_1x} 1x, ${Ape004_2x} 2x`}
                src={Ape004_1x}
                alt="APE_NFT_4"
              />
            </s.ImageContainer>
            <s.DescriptionContainer>
              <s.Main>WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?</s.Main>
              <s.Description>
                As an NFT owner, you can own, transfer, potentially access
                exclusive content, resell, but don't automatically get copyright
                or intellectual property rights.
              </s.Description>
            </s.DescriptionContainer>
          </s.ItemContainer>
        </s.Item>
      </s.List>
    </s.Container>
  );
};

export default Faq;
