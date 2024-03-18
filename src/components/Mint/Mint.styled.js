import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;
export const IconContainer = styled.div`
  width: 24px;
  height: 24px;

  fill: ${variables.colors.whiteText};
`;

export const Description = styled.p`
  color: ${variables.colors.whiteText};

  text-align: center;
  text-transform: uppercase;

  width: 213px;
`;
