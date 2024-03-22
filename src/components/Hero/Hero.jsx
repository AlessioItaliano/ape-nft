import * as s from './Hero.styled';

const Hero = () => {
  return (
    <s.SectionHero>
      <s.Background>
        <s.ContainerHero>
          <s.TitleContainer>
            <s.TitlePrimary>diD yOu seE iT ?</s.TitlePrimary>
            <s.Title>YACHT APES</s.Title>
            <s.TitleSecondary>Apes aRe eveRywhere</s.TitleSecondary>
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
      </s.Background>
    </s.SectionHero>
  );
};

export default Hero;
