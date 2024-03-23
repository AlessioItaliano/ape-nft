import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  padding: 10px;

  border-radius: 8px;
  fill: ${variables.colors.blackText};
  background: ${variables.colors.bgWithOpacityPrimary};
  backdrop-filter: ${variables.filters.blur};
  text-transform: uppercase;

  &:hover,
  &:focus {
    fill: ${variables.colors.whiteText};
  }
`;

export const Box = styled.div`
  width: 16px;
  height: 16px;
`;
