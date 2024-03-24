import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  align-items: flex-end;
  gap: 8px;

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    gap: 16px;
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  padding: 10px;

  fill: ${props =>
    props.theme === 'dark' ? vars.colors.blackText : vars.colors.whiteText};
  background: ${props =>
    props.theme === 'dark'
      ? vars.colors.bgWithOpacityPrimary
      : vars.colors.bgWithOpacitySecondary};

  border-radius: 8px;
  backdrop-filter: ${vars.filters.blur};

  &:hover,
  &:focus,
  &:active {
    fill: ${props =>
      props.theme === 'dark' ? vars.colors.whiteText : vars.colors.redText};
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    border-radius: 12px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    width: 80px;
    height: 80px;
  }
`;

export const Box = styled.div`
  width: 16px;
  height: 16px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    width: 24px;
    height: 24px;
  }
`;
