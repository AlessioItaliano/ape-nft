import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

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
  fill: ${vars.colors.blackText};
  background: ${vars.colors.bgWithOpacityPrimary};
  backdrop-filter: ${vars.filters.blur};
  text-transform: uppercase;

  &:hover,
  &:focus {
    fill: ${vars.colors.whiteText};
  }
`;

export const Box = styled.div`
  width: 16px;
  height: 16px;
`;
