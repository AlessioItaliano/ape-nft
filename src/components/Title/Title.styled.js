import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Title = styled.h2`
  color: ${variables.colors.whiteText};
  font-family: ${variables.fonts.grotesk};
  font-size: 44px;
  font-weight: 900;
  line-height: 1.1em;
  text-transform: uppercase;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    font-size: 80px;
    line-height: 1em;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 160px;
  }
`;
