import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const Banner = styled.div`
  background-color: ${variables.colors.bgSecondary};
  overflow: hidden;

  padding: 6px 0px 8px 0px;
`;

export const BannerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 24px;

  font-family: ${variables.fonts.grotesk};
  font-size: 36px;
  font-weight: 900;
  line-height: 1em;
  text-transform: uppercase;

  white-space: nowrap;

  color: ${variables.colors.whiteText};
`;

export const IconContainer = styled.div`
  width: 36px;
  height: 36px;

  display: inline-flex;

  fill: ${variables.colors.whiteText};
`;
