import styled from 'styled-components';

import { vars } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  z-index: 90;

  gap: 36px;
  height: 823px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    align-items: start;
    height: auto;

    gap: 86px;
    padding-bottom: 36px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    gap: 56px;
    padding-bottom: 40px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 220px;
  gap: 16px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    flex-direction: row;

    width: auto;
  }
`;

export const Title = styled.h2`
  font-family: ${vars.fonts.grotesk};
  font-size: 40px;
  font-weight: 900;
  line-height: 1em;
  text-transform: uppercase;
  white-space: pre-wrap;

  color: ${vars.colors.whiteText};

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    font-size: 60px;
    white-space: normal;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 120px;
  }
`;

export const Span = styled.span`
  color: ${vars.colors.redText};
`;

export const MainDescriptionContainer = styled.div`
  display: flex;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    padding-top: 11px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding-top: 24px;
  }
`;

export const MainDescription = styled.p`
  font-size: 16px;
  line-height: 1.18em;
  text-indent: 60%;
  text-align: right;
  text-transform: uppercase;
  min-width: 216px;

  color: ${vars.colors.whiteText};

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    width: 275px;
    white-space: pre-wrap;
    text-indent: initial;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
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

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    gap: 24px;
    width: 269px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    gap: 36px;
    width: 417px;
  }
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;

  fill: ${vars.colors.whiteText};

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    width: 36px;
    height: 36px;
  }
`;

export const SecondDescription = styled.p`
  text-align: center;
  text-transform: uppercase;

  color: ${vars.colors.whiteText};

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    font-size: 16px;
    line-height: 1.18em;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
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

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    width: 313px;
    height: 422px;

    right: 0;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    width: 492px;
    height: 662px;
  }
`;
