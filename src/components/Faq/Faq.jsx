import { useState } from 'react';

import Title from 'components/Title';

import { faqQuestions } from 'data/faqQuestions';

import * as s from './Faq.styled';

const Faq = () => {
  const [activeItem, setActiveItem] = useState('1');

  return (
    <s.Container>
      <Title name="Faq" />
      <s.List>
        {faqQuestions.map((faq, index) => (
          <s.Item
            key={index}
            onClick={() => setActiveItem(String(index + 1))}
            $active={activeItem === String(index + 1)}
          >
            <s.ItemContainer>
              <s.ImageContainer>
                <s.Image
                  srcSet={`${faq.image1x} 1x, ${faq.image2x} 2x`}
                  src={faq.image1x}
                  alt={faq.alt}
                />
              </s.ImageContainer>
              <s.DescriptionContainer>
                <s.Main>{faq.title}</s.Main>
                <s.Description>{faq.description}</s.Description>
              </s.DescriptionContainer>
            </s.ItemContainer>
          </s.Item>
        ))}
      </s.List>
    </s.Container>
  );
};

export default Faq;
