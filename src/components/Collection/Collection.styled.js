import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    gap: 40px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    gap: 80px;
  }
`;
