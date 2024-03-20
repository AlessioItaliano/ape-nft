import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  padding: 0 72px;
  margin: 0 auto;
  min-width: ${variables.breakpoints.mobileMin};
  max-width: ${variables.breakpoints.mobileMax};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding: 0 88px;
    min-width: 768px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    padding: 0 124px;
    max-width: 1280px;
  }
`;
