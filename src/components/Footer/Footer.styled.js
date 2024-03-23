import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Footer = styled.footer`
  padding: 24px 0 30px 0;

  background-color: ${vars.colors.bgMain};

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    padding: 40px 0;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding: 60px 0 40px o;
  }
`;
