import styled from 'styled-components';

import { vars } from '../../stylesheet/variables';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;

  padding: 10px 70px 12px 70px;
  border-radius: 8px;
  width: 100%;

  border: none;

  background: ${vars.colors.bgSecondary};
  color: ${vars.colors.whiteText};
  backdrop-filter: ${vars.filters.blur};

  text-align: center;
  font-family: ${vars.fonts.grotesk};
  font-size: 16px;
  font-weight: 900;
  line-height: 1.18em;
  text-transform: uppercase;

  &:focus,
  &:hover,
  &:active {
    color: ${vars.colors.blackText};
  }

  &:disabled {
    background: ${vars.colors.bgSecondary};
    color: ${vars.colors.whiteText};
    cursor: not-allowed;
  }

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    padding: 10px 107px 12px 107px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding: 16px 140px 20px 140px;
    font-size: 28px;
    line-height: 1.21em;
  }
`;
