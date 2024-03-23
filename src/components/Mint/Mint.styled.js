import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Container = styled.div`
  display: flex;
  justify-content: center;
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

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 16px;
  margin: 0 auto;
  max-width: 216px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    gap: 24px;
    max-width: 400px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    gap: 40px;
    max-width: 580px;
  }
`;

export const IconContainer = styled.div`
  width: 36px;
  height: 36px;

  fill: ${vars.colors.whiteText};
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.18em;
  text-align: center;
  text-transform: uppercase;

  color: ${vars.colors.whiteText};

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 24px;
    line-height: 1.2em;
  }
`;
