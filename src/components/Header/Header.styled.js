import styled from 'styled-components';

import { vars } from '../../stylesheet/variables';

export const Header = styled.header`
  display: flex;
  justify-content: ${props => (props.$scrolled ? 'end' : 'space-between')};

  position: ${props => (props.$scrolled ? 'fixed' : 'absolute')};
  top: ${props => (props.$scrolled ? '24px' : 0)};
  right: 0;
  left: 0;
  z-index: 100;

  min-width: ${vars.breakpoints.mobileMin};
  max-width: ${vars.breakpoints.mobileMax};
  height: auto;

  margin: auto;
  padding: ${props =>
    props.$scrolled ? '20px 16px 0 16px' : '62px 16px 0 16px'};
  background-color: transparent;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    padding: ${props =>
      props.$scrolled ? '22px 30px 0 30px' : '66px 30px 0 30px'};
    min-width: 768px;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding: ${props =>
      props.$scrolled ? '0 30px 0 30px' : '40px 30px 0 30px'};

    max-width: 1280px;
  }
`;
