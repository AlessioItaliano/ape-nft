import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

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
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    height: 100%;
  }
`;

export const Title = styled.h3`
  color: ${variables.colors.whiteText};
  font-family: ${variables.fonts.grotesk};
  font-size: 32px;
  font-weight: 900;
  line-height: 1em;
  text-transform: uppercase;

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
  white-space: pre-wrap;

  width: 216px;
  height: 242px;
  padding: 24px 12px;
  border-radius: 12px;

  background: ${variables.colors.bgSecondary};

  position: relative;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 24px;
  height: 24px;

  padding: 12px;

  cursor: pointer;

  fill: ${variables.colors.whiteText};

  ${LinkContainer}:hover & {
    top: 6px;
    right: 6px;

    @media screen and (min-width: ${variables.breakpoints.tablet}) {
      top: 12px;
      right: 12px;
    }
  }

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    top: 18px;
    right: 18px;
    padding: 0;
  }

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
  }
`;

export const Box = styled.div`
  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;
