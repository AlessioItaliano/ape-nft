import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    gap: 16px;
  }
`;
