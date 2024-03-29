import { ReactComponent as CloseIcon } from 'icons/close.svg';

import ImageItem from 'components/ImageItem';
import { aboutUsImages } from 'data/images';

import * as s from './AboutUs.styled';

const AboutUs = () => {
  return (
    <s.Container>
      <s.MainContainer>
        <s.Title>
          a Story that started with <s.Span>one simple {'\n'}ape</s.Span>
        </s.Title>

        <s.MainDescriptionContainer>
          <s.MainDescription>
            WHO GOT FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW
            THE IDEA OF ESCAPING AND DYNAMIC JOURNEY ON THE{'\n'} YACHT
          </s.MainDescription>
        </s.MainDescriptionContainer>
      </s.MainContainer>

      <s.SecondDescriptionContainer>
        <s.IconContainer>
          <CloseIcon />
        </s.IconContainer>

        <s.SecondDescription>
          EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS ARE
          RANDOMLY GENERATED BY USERS
        </s.SecondDescription>
      </s.SecondDescriptionContainer>
      <s.ImageContainer>
        <ImageItem item={aboutUsImages} />
      </s.ImageContainer>
    </s.Container>
  );
};

export default AboutUs;
