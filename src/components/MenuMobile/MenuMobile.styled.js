// import styled from 'styled-components';

import { vars } from '../../stylesheet/variables';

import styled, { keyframes } from 'styled-components';

const anime = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Field = styled.div`
  position: absolute;
  z-index: 1000;

  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  padding: 62px 16px 24px 16px;
  background: ${vars.colors.bgMain};
  animation: ${anime} 500ms ease-in-out;
`;

export const Container = styled.div`
  position: relative;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: start;
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
  &:focus,
  &:active {
    color: ${vars.colors.redText};
    text-decoration: underline;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ContainerFooter = styled.div`
  position: absolute;
  bottom: 0;
`;
