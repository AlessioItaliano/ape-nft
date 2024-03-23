import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Text = styled.p`
  text-align: center;
  text-transform: uppercase;

  color: ${vars.colors.whiteText};

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 16px;
    line-height: 1.18em;
  }
`;
