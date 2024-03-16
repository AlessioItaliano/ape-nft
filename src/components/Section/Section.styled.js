import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const Section = styled.section`
  padding: 30px 0;

  // background-color: ${variables.colors.bgMain};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding: 40px 0;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    padding: 60px 0;
  }
`;
