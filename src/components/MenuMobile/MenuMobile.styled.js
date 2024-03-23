import styled from 'styled-components';

import { vars } from '../../stylesheet/variables';

export const Field = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1000;

  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  padding: 62px 16px 0 16px;

  background: ${vars.colors.bgMain};
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;

  width: 48px;
  height: 48px;
  padding: 10px;

  border-radius: 8px;
  background: ${vars.colors.bgWithOpacitySecondary};
  color: ${vars.colors.whiteText};
  border: none;

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${vars.colors.redText};
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 160px;
`;
