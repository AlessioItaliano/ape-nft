import styled from 'styled-components';

import mainHeroMobile1x from '../../images/appImages/hero-ape-mobile-1x.png';
import mainHeroMobile2x from '../../images/appImages/hero-ape-mobile-2x.png';
import mainHeroTablet1x from '../../images/appImages/hero-ape-tablet-1x.png';
import mainHeroTablet2x from '../../images/appImages/hero-ape-tablet-2x.png';
import mainHeroDesktop1x from '../../images/appImages/hero-ape-desktop-1x.png';
import mainHeroDesktop2x from '../../images/appImages/hero-ape-desktop-2x.png';

import { variables } from '../../stylesheet/variables';

export const SectionHero = styled.div`
  padding: 54px 0 30px 0;
  margin-right: 8px;
  margin-left: 8px;
  // position: relative;
  // z-index: 90;
`;

export const ContainerHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-content: space-between;

  // position: relative;
  // z-index: 90;

  height: 542px;
  padding: 36px 64px 19px 64px;
  // padding: 62px 16px 0 16px;
  margin: 0 auto;
  // min-width: ${variables.breakpoints.mobileMin};
  max-width: ${variables.breakpoints.mobileMax};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    min-width: 768px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    max-width: 1280px;
  }

  // margin: 0 auto;
  // padding: 0 calc(72px + ((276 - 72) * (100vw - 360px) / (768 - 360)));

  // @media screen and (min-width: ${variables.breakpoints.tablet}) {
  //   padding: 0 calc(88px + ((344 - 88) * (100vw - 768px) / (1280 - 768)));
  // }

  // @media screen and (min-width: ${variables.breakpoints.desktop}) {
  //   padding: 0 calc(124px + ((204 - 124) * (100vw - 1280px) / (1440 - 1280)));
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
// export const MainContainer = styled.div`
//   height: 500px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   // flex-wrap: wrap;
//   align-content: space-between;
// `;

export const TitleContainer = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h3`
  font-family: ${variables.fonts.biro};
  font-size: 16px;
  text-align: right;
  font-weight: 700;
  line-height: 1.68em;

  color: ${variables.colors.blackText};
`;

export const MainTitle = styled.h2`
  font-family: ${variables.fonts.grotesk};
  font-size: 44px;

  font-weight: 900;
  line-height: 1em;
  letter-spacing: 0.44px;
  color: ${variables.colors.blackText};

  white-space: nowrap;

  margin-bottom: 8px;
`;

export const Description = styled.p`
  color: ${variables.colors.blackText};

  text-align: center;
  text-transform: uppercase;

  width: 213px;
`;

export const HeroButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;

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
