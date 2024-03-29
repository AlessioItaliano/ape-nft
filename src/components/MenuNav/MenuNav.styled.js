import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;

  border-radius: 8px;

  color: ${props =>
    props.theme === 'dark' ? vars.colors.blackText : vars.colors.whiteText};
  background: ${props =>
    props.theme === 'dark'
      ? vars.colors.bgWithOpacityPrimary
      : vars.colors.bgWithOpacitySecondary};

  backdrop-filter: ${vars.filters.blur};

  font-weight: 600;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    border-radius: 12px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 16px;
    line-height: 1.18em;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  text-transform: uppercase;

  width: 48px;
  height: 48px;
  padding: 10px;

  border-radius: inherit;
  color: inherit;
  background: transparent;
  border: none;

  cursor: pointer;

  &:hover,
  &:active {
    color: ${props =>
      props.theme === 'dark' ? vars.colors.whiteText : vars.colors.redText};
    text-decoration: underline;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    width: 80px;
    height: 80px;
  }
`;
