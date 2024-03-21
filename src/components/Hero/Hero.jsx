// import Container from 'components/Container';
import * as s from './Hero.styled';

const Hero = () => {
  return (
    <s.SectionHero>
      <s.Background>
        {/* <Container> */}
        <s.ContainerHero>
          <s.TitleContainer>
            <s.TitleDescription>diD yOu seE iT ?</s.TitleDescription>
            <s.Title>YACHT APES</s.Title>
            <s.TitleDescription>Apes aRe eveRywhere</s.TitleDescription>
          </s.TitleContainer>

          <s.DescriptionBox>
            <s.DescriptionContainer>
              <s.HeroButton href="#mint">Meet apes</s.HeroButton>
              <s.Description>
                Yacht Ape is a collection of unique digital apes that you can
                own in NFT format
              </s.Description>
            </s.DescriptionContainer>
          </s.DescriptionBox>
        </s.ContainerHero>
        {/* </Container> */}
      </s.Background>
    </s.SectionHero>
  );
};

export default Hero;
