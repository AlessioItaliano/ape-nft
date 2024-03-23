import styled from 'styled-components';

import { vars } from '../../stylesheet/variables';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 100;

  min-width: ${vars.breakpoints.mobileMin};
  max-width: ${vars.breakpoints.mobileMax};
  height: auto;

  left: 0;
  right: 0;

  padding: 62px 16px 0 16px;
  margin: auto;

  background-color: transparent;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    padding: 66px 28px 0 28px;
    min-width: 768px;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding-top: 28px;
    max-width: 1280px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  color: ${vars.colors.whiteText};
`;
