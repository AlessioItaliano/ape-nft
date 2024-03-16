import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  position: absolute;
  z-index: 100;

  height: auto;
  width: 100%;

  padding: 8px 16px;

  background-color: transparent;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: ${variables.colors.whiteText};
`;
