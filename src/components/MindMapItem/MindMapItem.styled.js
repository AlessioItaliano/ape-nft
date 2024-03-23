import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 216px;
  height: 242px;
  padding: 24px 12px;

  border-radius: 12px;
  background: ${variables.colors.bgTertiary};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    width: 100%;
    padding: 24px;
    border-radius: 16px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    height: 480px;
    border-radius: 24px;
  }
`;

export const Title = styled.h3`
  font-family: ${variables.fonts.grotesk};
  font-size: 32px;
  font-weight: 900;
  line-height: 1em;
  text-transform: uppercase;

  color: ${variables.colors.whiteText};

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 64px;
  }
`;

export const Description = styled.p`
  color: ${variables.colors.whiteText};
  text-transform: uppercase;

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 24px;
    line-height: 1.2em;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  white-space: pre-wrap;

  width: 100%;
  min-width: 206px;
  height: 242px;
  padding: 24px 12px;
  border-radius: 12px;

  background: ${variables.colors.bgSecondary};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    border-radius: 16px;
    padding: 24px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    border-radius: 24px;
    height: 480px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;

  width: 24px;
  height: 24px;

  cursor: pointer;

  fill: ${variables.colors.whiteText};

  ${LinkContainer}:hover & {
    top: 12px;
    right: 12px;

    @media screen and (min-width: ${variables.breakpoints.desktop}) {
      top: 24px;
      right: 24px;
    }
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    width: 40px;
    height: 40px;

    top: 36px;
    right: 36px;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding-left: 108px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    padding-left: 228px;
  }
`;
