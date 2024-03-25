import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const SectionHero = styled.section`
  padding: 54px 0 30px 0;
  margin: 0 8px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    margin: 0 16px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding: 16px 0 60px 0;
    margin: 0 16px;
  }
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  background-color: ${vars.colors.bgSecondary};

  height: 542px;
  padding: 36px 64px 19px 64px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    height: 421px;
    padding: 124px 72px 123px 72px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    height: 677px;
    padding: 197px 120px 206px 120px;
  }
`;

export const ContainerHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  height: inherit;

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    justify-content: center;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    max-width: 591px;
    align-items: flex-start;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    width: 100%;
    max-width: 1019px;
  }
`;

export const Title = styled.h1`
  font-family: ${vars.fonts.grotesk};
  font-size: 44px;
  font-weight: 900;
  line-height: 1em;
  letter-spacing: 0.44px;

  white-space: nowrap;
  position: relative;
  z-index: 3;

  margin-bottom: 8px;

  color: ${vars.colors.blackText};

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    font-size: 92px;
    word-spacing: 155px;
    letter-spacing: 0.92px;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 164px;
    word-spacing: 257px;
    margin-bottom: 30px;
    z-index: 1;
  }
`;

export const TitlePrimary = styled.h3`
  font-family: ${vars.fonts.biro};
  font-size: 16px;
  text-align: right;
  font-weight: 700;
  line-height: 1.68em;

  color: ${vars.colors.blackText};

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    font-size: 20px;
    line-height: 1.65em;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 24px;
    line-height: 1.66em;
  }
`;

export const TitleSecondary = styled.h3`
  font-family: ${vars.fonts.biro};
  font-size: 16px;
  text-align: right;
  font-weight: 700;
  line-height: 1.68em;

  color: ${vars.colors.blackText};

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    font-size: 20px;
    line-height: 1.65em;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 24px;
    line-height: 1.66em;
    text-indent: 40%;
    white-space: nowrap;
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 216px;
  position: relative;
  z-index: 10;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    position: relative;
    z-index: 10;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    position: absolute;
    bottom: -87px;
    left: 400px;

    flex-direction: column-reverse;

    width: 190px;
    gap: 16px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    width: 337px;
    gap: 28px;
    bottom: -121px;
    left: 690px;
  }
`;

export const Description = styled.p`
  color: ${vars.colors.blackText};

  text-transform: uppercase;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    text-align: justify;
    text-indent: 40%;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 16px;
    line-height: 1.18em;

    text-indent: 20%;
  }
`;

export const HeroButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;

  width: 100%;

  padding: 10px 70px 12px 70px;

  border-radius: 8px;
  border: none;
  background: ${vars.colors.bgWithOpacityPrimary};
  color: ${vars.colors.blackText};

  backdrop-filter: ${vars.filters.blur};

  text-align: center;
  font-family: ${vars.fonts.grotesk};
  font-size: 16px;
  font-weight: 900;
  line-height: 1.18em;
  text-transform: uppercase;

  &:focus,
  &:hove,
  ,
  &:active {
    color: ${vars.colors.whiteText};
  }

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    border-radius: 12px;
    padding: 10px 61px 12px 61px;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding: 16px 140px 20px 140px;

    font-size: 28px;
    line-height: 1.21em;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 91px;

  display: flex;
  width: 216px;
  height: 284px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    width: 283px;
    height: 386px;

    bottom: -123px;
    right: 175px;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    width: 463px;
    height: 612px;

    bottom: -206px;
    right: 299px;
  }
`;
