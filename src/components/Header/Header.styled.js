import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 100;

  min-width: ${variables.breakpoints.mobileMin};
  max-width: ${variables.breakpoints.mobileMax};
  height: auto;

  left: 0;
  right: 0;

  padding: 62px 16px 0 16px;
  margin: auto;

  background-color: transparent;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    min-width: 768px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    max-width: 1280px;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: ${variables.colors.whiteText};
`;
