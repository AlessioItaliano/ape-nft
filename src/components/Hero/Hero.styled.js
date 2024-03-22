import styled from 'styled-components';

import mainHeroMobile1x from '../../images/appImages/hero-ape-mobile-1x.png';
import mainHeroMobile2x from '../../images/appImages/hero-ape-mobile-2x.png';
import mainHeroTablet1x from '../../images/appImages/hero-ape-tablet-1x.png';
import mainHeroTablet2x from '../../images/appImages/hero-ape-tablet-2x.png';
import mainHeroDesktop1x from '../../images/appImages/hero-ape-desktop-1x.png';
import mainHeroDesktop2x from '../../images/appImages/hero-ape-desktop-2x.png';

import { variables } from '../../stylesheet/variables';

export const SectionHero = styled.section`
  // padding: 54px 8px 30px 8px;
  // margin-left: auto;
  // margin-right: auto;

  padding: 54px 0 30px 0;
  margin: 0 8px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    margin: 0 16px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    padding: 16px 0 60px 0;
    margin: 0 16px;
  }
`;

export const Background = styled.div`
  border-radius: 12px;

  background-color: ${variables.colors.bgSecondary};

  background-image: url(${mainHeroMobile1x});
  background-position: bottom 110px center;
  background-repeat: no-repeat;
  background-size: 216px 284px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mainHeroMobile2x});
  }

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    background-image: url(${mainHeroTablet1x});
    background-position: calc(50% - 20px) bottom;
    // background-position: center bottom;
    background-size: 283px 386px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${mainHeroTablet2x});
    }
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    background-image: url(${mainHeroDesktop1x});
    background-size: 463px 612px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${mainHeroDesktop2x});
    }
  }
`;

export const ContainerHero = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
  text-align: center;

  flex-direction: column;
  justify-content: space-between;
  // align-content: space-between;

  position: relative;
  // z-index: 90;
  // max-width: 591px;
  height: 542px;
  // margin: 0 auto;
  padding: 36px 64px 19px 64px;

  // padding: 0 72px;
  margin-left: auto;
  margin-right: auto;
  // min-width: ${variables.breakpoints.mobileMin};
  max-width: ${variables.breakpoints.mobileMax};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding: 124px 72px 123px 72px;
    // padding-left: auto;
    // padding-right: auto;
    height: 421px;
    max-width: 591px;
    // min-width: 768px;
    // justify-content: center;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    height: 677px;
    padding: 65px 120px 81px 120px;
    width: 100%;
    max-width: 1019px;
    justify-content: center;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;
  // width: 100%;
  // margin-left: auto;
  // margin-right: auto;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    align-items: flex-start;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
  }
`;

export const Title = styled.h2`
  font-family: ${variables.fonts.grotesk};
  font-size: 44px;

  font-weight: 900;
  line-height: 1em;
  letter-spacing: 0.44px;
  color: ${variables.colors.blackText};

  white-space: nowrap;
  // position: relative;

  margin-bottom: 8px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    font-size: 92px;
    word-spacing: 155px;
    letter-spacing: 0.92px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 164px;
    word-spacing: 265px;
    margin-bottom: 30px;
  }
`;

export const TitlePrimary = styled.h3`
  font-family: ${variables.fonts.biro};
  font-size: 16px;
  text-align: right;
  font-weight: 700;
  line-height: 1.68em;

  color: ${variables.colors.blackText};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    font-size: 20px;
    line-height: 1.65em;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 24px;
    line-height: 1.66em;
  }
`;

export const TitleSecondary = styled.h3`
  font-family: ${variables.fonts.biro};
  font-size: 16px;
  text-align: right;
  font-weight: 700;
  line-height: 1.68em;

  color: ${variables.colors.blackText};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    font-size: 20px;
    line-height: 1.65em;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
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

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    // justify-content: end;
    // position: absolute;
    // bottom: 35px;
    // right: 72px;
    position: relative;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  // min-width: 217px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    flex-direction: column-reverse;
    // // align-items: end;
    // justify-content: end;
    width: 190px;

    position: absolute;
    bottom: -85px;
    left: 105px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    width: 337px;

    bottom: -115px;
    left: 178px;
  }
`;

export const Description = styled.p`
  color: ${variables.colors.blackText};

  // text-align: center;
  text-transform: uppercase;

  // width: 213px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    text-align: justify;
    text-indent: 40%;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
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
  background: ${variables.colors.bgWithOpacityPrimary};
  color: ${variables.colors.blackText};
  backdrop-filter: blur(6px);

  text-align: center;
  font-family: ${variables.fonts.grotesk};
  font-size: 16px;
  font-weight: 900;
  line-height: 1.18em;
  text-transform: uppercase;

  &:focus,
  &:hover {
    color: ${variables.colors.whiteText};
  }

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    border-radius: 12px;
    padding: 10px 61px 12px 61px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    padding: 16px 140px 20px 140px;

    font-size: 28px;
    line-height: 1.21em;
  }
`;
