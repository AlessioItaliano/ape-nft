import styled from 'styled-components';

import imgMobile1x from '../../images/appImages/story-ape-mobile-1x.png';
import imgMobile2x from '../../images/appImages/story-ape-mobile-2x.png';
import imgTablet1x from '../../images/appImages/story-ape-tablet-1x.png';
import imgTablet2x from '../../images/appImages/story-ape-tablet-2x.png';
import imgDesktop1x from '../../images/appImages/story-ape-desktop-1x.png';
import imgDesktop2x from '../../images/appImages/story-ape-desktop-2x.png';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  // justify-content: space-between;
  // align-content: space-between;

  // position: relative;
  // z-index: 90;

  height: 823px;
  // width: 100%;

  // padding: 36px 75px 19px 75px;
  // margin: 0 8px;
  // border-radius: 12px;

  // background-color: ${variables.colors.bgSecondary};

  background-image: url(${imgMobile1x});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 216px 292px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${imgMobile2x});
  }

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    background-image: url(${imgTablet1x});
    background-size: 313px 422px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgTablet2x});
    }
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    background-image: url(${imgDesktop1x});
    background-size: 492px 662px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgDesktop2x});
    }
  }
`;
export const MainTitleContainer = styled.div`
  width: 220px;
  margin-bottom: 16px;
`;

export const MainTitle = styled.h2`
  font-family: ${variables.fonts.grotesk};
  font-size: 40px;

  font-weight: 900;
  line-height: 1em;
  letter-spacing: 0.44px;
  color: ${variables.colors.whiteText};

  text-transform: uppercase;
`;

export const Span = styled.span`
  color: ${variables.colors.redText};
`;

export const MainDescriptionContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;

  margin-bottom: 32px;
`;

export const MainDescription = styled.p`
  color: ${variables.colors.whiteText};

  text-transform: uppercase;
  text-align: right;
  font-size: 16px;
  line-height: 1.18em;

  width: 213px;
`;

export const SecondDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;
export const IconContainer = styled.div`
  width: 24px;
  height: 24px;

  fill: ${variables.colors.whiteText};
`;

export const SecondDescription = styled.p`
  color: ${variables.colors.whiteText};

  text-align: center;
  text-transform: uppercase;

  width: 213px;
`;
