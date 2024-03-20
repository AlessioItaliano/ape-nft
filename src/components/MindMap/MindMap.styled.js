import styled from 'styled-components';
import { variables } from 'stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    gap: 40px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    gap: 80px;
  }
`;
