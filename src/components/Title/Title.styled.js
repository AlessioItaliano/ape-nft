import styled from 'styled-components';

import { vars } from '../../stylesheet/variables';

export const Title = styled.h2`
  color: ${vars.colors.whiteText};
  font-family: ${vars.fonts.grotesk};
  font-size: 44px;
  font-weight: 900;
  line-height: 1.1em;
  text-transform: uppercase;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    font-size: 80px;
    line-height: 1em;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 160px;
  }
`;
