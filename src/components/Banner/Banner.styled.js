import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Banner = styled.div`
  overflow: hidden;

  padding: 1px 0px 6px 0px;

  background-color: ${vars.colors.bgSecondary};

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding: 6px 0px 16px 0px;
  }
`;

export const Container = styled.div`
  scroll-behavior: smooth;
  display: flex;
  align-items: center;

  gap: 24px;
`;

export const Text = styled.p`
  font-family: ${vars.fonts.grotesk};
  font-size: 36px;
  font-weight: 900;
  line-height: 1em;
  text-transform: uppercase;

  white-space: nowrap;

  color: ${vars.colors.whiteText};

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 64px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  width: 36px;
  margin-top: 7px;

  fill: ${vars.colors.whiteText};

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding-top: 10px;
  }
`;
