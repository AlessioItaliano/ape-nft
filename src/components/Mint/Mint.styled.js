import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

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

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    gap: 24px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    gap: 40px;
  }
`;
export const IconContainer = styled.div`
  width: 36px;
  height: 36px;

  fill: ${variables.colors.whiteText};
`;

export const Description = styled.p`
  color: ${variables.colors.whiteText};

  font-size: 16px;
  line-height: 1.18em;
  text-align: center;
  text-transform: uppercase;

  width: 213px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    gap: 24px;
    width: 397px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 24px;
    line-height: 1.2em;
    width: 518px;
  }
`;
