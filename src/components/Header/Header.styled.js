import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Header = styled.header`
  display: flex;

  //   grid-template-columns: 1fr 1fr;

  //   height: 150px;

  padding: 21px 75px;

  background-color: ${variables.colors.bgSecondary};
`;

export const Logo = styled.a`
  width: 48px;
  height: 32px;
  color: ${variables.colors.whiteText};
`;
