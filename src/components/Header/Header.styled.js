import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Header = styled.header`
  display: flex;
  //   align-items: start;
  justify-content: space-between;

  //   grid-template-columns: 1fr 1fr;

  //   height: 150px;

  padding: 21px 8px;

  background-color: ${variables.colors.bgSecondary};
`;

export const Logo = styled.a`
  width: 48px;
  height: 32px;
  color: ${variables.colors.whiteText};
`;
