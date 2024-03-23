import styled from 'styled-components';

import { vars } from '../../stylesheet/variables';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;

  padding: 10px 70px 12px 70px;
  border-radius: 8px;

  border: none;

  background: ${vars.colors.bgWithOpacityPrimary};
  color: ${vars.colors.blackText};
  backdrop-filter: ${vars.filters.blur};

  text-align: center;
  font-family: ${vars.fonts.grotesk};
  font-size: 16px;
  font-weight: 900;
  line-height: 1.18em;
  text-transform: uppercase;

  &:focus,
  &:hover {
    color: ${vars.colors.whiteText};
  }
`;
