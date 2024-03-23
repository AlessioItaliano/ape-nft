import styled from 'styled-components';

// import imgMobile1x from '../../images/appImages/story-ape-mobile-1x.png';
// import imgMobile2x from '../../images/appImages/story-ape-mobile-2x.png';
// import imgTablet1x from '../../images/appImages/story-ape-tablet-1x.png';
// import imgTablet2x from '../../images/appImages/story-ape-tablet-2x.png';
// import imgDesktop1x from '../../images/appImages/story-ape-desktop-1x.png';
// import imgDesktop2x from '../../images/appImages/story-ape-desktop-2x.png';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  // justify-content: space-between;
  // align-content: space-between;

  position: relative;
  z-index: 90;
  gap: 36px;
  height: 823px;
  // width: 100%;

  // padding: 36px 75px 19px 75px;
  // margin: 0 8px;
  // border-radius: 12px;

  // background-color: ${variables.colors.bgSecondary};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    align-items: start;
    height: auto;
    gap: 86px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    gap: 56px;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  width: 220px;
  gap: 16px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    flex-direction: row;
    // gap: 48px;
    // margin-bottom: 68px;
    width: auto;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    // gap: 85px;
    // margin-bottom: 56px;
  }
`;

export const MainTitle = styled.h2`
  font-family: ${variables.fonts.grotesk};
  font-size: 40px;

  font-weight: 900;
  line-height: 1em;
  letter-spacing: 0.44px;
  // text-align-last: left;
  white-space: pre-wrap;

  color: ${variables.colors.whiteText};

  text-transform: uppercase;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    font-size: 60px;
    white-space: normal;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 120px;
  }
`;

export const Span = styled.span`
  color: ${variables.colors.redText};
`;

export const MainDescriptionContainer = styled.div`
  display: flex;
  // justify-content: end;
  // align-items: end;
  // flex-direction: column;
  // text-align: right;
  // margin-bottom: 32px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding-top: 11px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    padding-top: 24px;
  }
`;

export const MainDescription = styled.p`
  color: ${variables.colors.whiteText};

  text-transform: uppercase;
  // direction: rtl;
  text-align: right;
  font-size: 16px;
  line-height: 1.18em;
  text-indent: 60%;

  // width: 213px;
  width: 216px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    // gap: 24px;
    width: 275px;
    white-space: pre-wrap;
    text-indent: initial;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    width: 409px;
    font-size: 24px;
    line-height: 1.2em;
  }
`;

export const SecondDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 216px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    gap: 24px;
    width: 269px;
    margin-bottom: 36px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    gap: 36px;
    width: 417px;
    margin-bottom: 40px;
  }
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;

  fill: ${variables.colors.whiteText};

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    width: 36px;
    height: 36px;
  }
`;

export const SecondDescription = styled.p`
  text-align: center;
  text-transform: uppercase;

  color: ${variables.colors.whiteText};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    font-size: 16px;
    line-height: 1.18em;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 24px;
    line-height: 1.2em;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  z-index: 2;

  width: 216px;
  height: 292px;

  bottom: 0;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    width: 313px;
    height: 422px;

    right: 0;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    width: 492px;
    height: 662px;
  }
`;
