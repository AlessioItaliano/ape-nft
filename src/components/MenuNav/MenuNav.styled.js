import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const Container = styled.nav`
  display: flex;
  flex-direction: row-reverse;

  border-radius: 8px;
  background: ${variables.colors.bgWithOpacityPrimary};
  color: ${variables.colors.blackText};
  // backdrop-filter: blur(6px);

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
  background: inherit;
  border: none;

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${variables.colors.whiteText};
  }
`;
