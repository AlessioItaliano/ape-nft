import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const Text = styled.p`
  text-align: center;
  text-transform: uppercase;

  color: ${variables.colors.whiteText};

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 16px;
    line-height: 1.18em;
  }
`;
