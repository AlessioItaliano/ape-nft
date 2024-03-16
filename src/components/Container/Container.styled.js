import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  padding-left: 64px;
  padding-right: 64px;
  margin-right: auto;
  margin-left: auto;
  max-width: 767px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    min-width: 768px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    max-width: 1280px;
  }
`;
