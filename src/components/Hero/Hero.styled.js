import styled from 'styled-components';

import mainHeroMobile1x from '../../images/appImages/hero-ape-mobile-1x.png';
import mainHeroMobile2x from '../../images/appImages/hero-ape-mobile-2x.png';
import mainHeroTablet1x from '../../images/appImages/hero-ape-tablet-1x.png';
import mainHeroTablet2x from '../../images/appImages/hero-ape-tablet-2x.png';
import mainHeroDesktop1x from '../../images/appImages/hero-ape-desktop-1x.png';
import mainHeroDesktop2x from '../../images/appImages/hero-ape-desktop-2x.png';

import { variables } from '../../stylesheet/variables';

export const SectionHero = styled.section`
  padding: 54px 0 30px 0;
  margin: 0 8px;

  // display: flex;
  // justify-content: center;

  // position: relative;
  // z-index: 90;
`;

export const Background = styled.div`
  // display: flex;
  // // justify-content: center;
  // align-items: center;
  // justify-content: center;

  // // display: flex;
  // flex-direction: column;
  // // justify-content: space-between;
  // align-content: space-between;

  // position: relative;
  // z-index: 90;

  // height: 542px;
  // padding: 36px 0 19px 0;
  // padding: 36px 64px 19px 64px;
  // padding: 62px 16px 0 16px;
  // margin: 0 auto;
  // min-width: ${variables.breakpoints.mobileMin};
  // max-width: ${variables.breakpoints.mobileMax};

  // @media screen and (min-width: ${variables.breakpoints.tablet}) {
  //   padding: 35px 0;
  // }
  // @media screen and (min-width: ${variables.breakpoints.desktop}) {
  //   height: 677px;
  //   padding: 65px 0 81px 0;
  // }

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
    background-position: bottom center;
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
  justify-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;

  flex-direction: column;
  justify-content: space-between;
  // align-content: space-between;

  position: relative;
  // z-index: 90;

  height: 542px;
  padding: 36px 0 19px 0;
  // padding: 36px 64px 19px 64px;
  // padding: 62px 16px 0 16px;
  // margin: 0 auto;
  // min-width: ${variables.breakpoints.mobileMin};
  // max-width: ${variables.breakpoints.mobileMax};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding: 124px 0 123px 0;
    height: auto;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    height: 677px;
    padding: 65px 0 81px 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  // position: relative;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    align-items: start;
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

  margin-bottom: 8px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    font-size: 92px;
    word-spacing: 180px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 164px;
  }
`;

export const TitleDescription = styled.h3`
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

export const DescriptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    // justify-content: end;
    position: absolute;
    bottom: -8px;
    right: 0;
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
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    width: 337px;
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
`;
