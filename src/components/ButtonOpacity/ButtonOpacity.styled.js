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

  border: none;

  background: ${variables.colors.bgWithOpacityPrimary};
  color: ${variables.colors.blackText};
  backdrop-filter: blur(6px);

  text-align: center;
  font-family: ${variables.fonts.grotesk};
  font-size: 16px;
  font-weight: 900;
  line-height: 1.18em;
  text-transform: uppercase;

  &:focus,
  &:hover {
    color: ${variables.colors.whiteText};
  }
`;
