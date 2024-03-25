import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.type === 'link' ? 'end' : 'space-between'};
  align-items: flex-start;

  position: relative;
  white-space: pre-wrap;
  box-sizing: border-box;

  width: 216px;
  height: 242px;
  padding: 24px 12px;

  border-radius: 12px;
  background: ${props =>
    props.type === 'link' ? vars.colors.bgSecondary : vars.colors.bgTertiary};

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    width: 100%;
    padding: 24px;
    border-radius: 16px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    height: 480px;
    border-radius: 24px;
  }
`;

export const Title = styled.h3`
  font-family: ${vars.fonts.grotesk};
  font-size: 32px;
  font-weight: 900;
  line-height: 1em;
  text-transform: uppercase;

  color: ${vars.colors.whiteText};

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 64px;
  }
`;

export const Description = styled.p`
  color: ${vars.colors.whiteText};
  text-transform: uppercase;

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 24px;
    line-height: 1.2em;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;

  width: 24px;
  height: 24px;

  cursor: pointer;

  fill: ${vars.colors.whiteText};

  ${Container}:hover & {
    top: 12px;
    right: 12px;

    @media screen and (min-width: ${vars.breakpoints.desktop}) {
      top: 24px;
      right: 24px;
    }
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    width: 40px;
    height: 40px;

    top: 36px;
    right: 36px;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    padding-left: 108px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding-left: 228px;
  }
`;
