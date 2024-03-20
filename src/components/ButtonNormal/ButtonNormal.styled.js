import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;

  padding: 10px 70px 12px 70px;
  border-radius: 8px;
  width: 100%;

  border: none;

  background: ${variables.colors.bgSecondary};
  color: ${variables.colors.whiteText};
  backdrop-filter: blur(6px);

  text-align: center;
  font-family: ${variables.fonts.grotesk};
  font-size: 16px;
  font-weight: 900;
  line-height: 1.18em;
  text-transform: uppercase;

  &:focus,
  &:hover {
    color: ${variables.colors.blackText};
  }

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding: 10px 107px 12px 107px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    padding: 16px 140px 20px 140px;
    font-size: 28px;
    line-height: 1.21em;
  }
`;
