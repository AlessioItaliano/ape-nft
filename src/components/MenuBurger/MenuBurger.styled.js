import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row-reverse;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  padding: 10px;

  border-radius: 8px;
  color: ${vars.colors.blackText};
  background: ${vars.colors.bgWithOpacityPrimary};
  border: none;
  backdrop-filter: ${vars.filters.blur};

  font-family: 'Messina Sans Mono';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  text-transform: uppercase;

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${vars.colors.whiteText};
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  padding: 10px;

  border-radius: 8px;
  fill: ${vars.colors.blackText};
  background: ${vars.colors.bgWithOpacityPrimary};
  backdrop-filter: ${vars.filters.blur};
  text-transform: uppercase;

  &:hover,
  &:focus {
    fill: ${vars.colors.whiteText};
  }
`;
