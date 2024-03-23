import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Container = styled.nav`
  display: flex;
  flex-direction: row-reverse;

  border-radius: 8px;
  background: ${vars.colors.bgWithOpacityPrimary};
  color: ${vars.colors.blackText};
  //   backdrop-filter: ${vars.filters.blur};

  font-weight: 600;
  text-transform: uppercase;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;

  width: 48px;
  height: 48px;
  padding: 10px;

  border-radius: inherit;
  background: transparent;
  // background: ${vars.colors.bgWithOpacityPrimary};
  border: none;

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${vars.colors.whiteText};
  }
`;
