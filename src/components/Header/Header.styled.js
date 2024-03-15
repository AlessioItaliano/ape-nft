import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  height: 760px;

  padding: 21px 75px;

  background-color: ${variables.colors.bgSecondary};
`;
