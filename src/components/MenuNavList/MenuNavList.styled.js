import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const List = styled.ul`
  display: flex;
  flex-direction: row-reverse;
`;

export const Item = styled.li`
  display: flex;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  width: 48px;
  height: 48px;
  padding: 10px;

  &:hover,
  &:focus {
    color: ${variables.colors.whiteText};
  }
`;
