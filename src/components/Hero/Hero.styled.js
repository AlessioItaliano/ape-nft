import styled from 'styled-components';

import mainHeroMobile1x from '../../images/appImages/hero-ape-mobile-1x.png';
import mainHeroMobile2x from '../../images/appImages/hero-ape-mobile-2x.png';
import mainHeroTablet1x from '../../images/appImages/hero-ape-tablet-1x.png';
import mainHeroTablet2x from '../../images/appImages/hero-ape-tablet-2x.png';
import mainHeroDesktop1x from '../../images/appImages/hero-ape-desktop-1x.png';
import mainHeroDesktop2x from '../../images/appImages/hero-ape-desktop-2x.png';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;

  position: relative;
  z-index: 90;

  height: 542px;
  // width: 100%;

  padding: 36px 75px 19px 75px;
  margin: 0 8px 30px 8px;
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