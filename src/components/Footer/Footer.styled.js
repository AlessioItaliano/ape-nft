import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const Footer = styled.footer`
  padding: 24px 0 30px 0;

  background-color: ${variables.colors.bgMain};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding: 40px 0;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    padding: 60px 0 40px o;
  }
`;
