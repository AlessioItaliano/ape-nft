import * as s from './Hero.styled';

const Hero = () => {
  return (
    <s.Container>
      <s.TitleContainer>
        <s.Title>diD yOu seE iT ?</s.Title>
        <s.MainTitle>YACHT APES</s.MainTitle>
        <s.Title>Apes aRe eveRywhere</s.Title>
      </s.TitleContainer>
      <s.DescriptionContainer>
        <s.HeroButton href="#mint">Meet apes</s.HeroButton>
        <s.Description>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </s.Description>
      </s.DescriptionContainer>
    </s.Container>
  );
};

export default Hero;
