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
  //   box-sizing: border-box;

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

export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  gap: 5px;

  margin-bottom: 30px;
  fill: ${vars.colors.whiteText};
  cursor: pointer;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  padding: 10px;

  border-radius: 8px;
  fill: ${vars.colors.whiteText};
  background: ${vars.colors.bgWithOpacitySecondary};
  backdrop-filter: ${vars.filters.blur};

  &:hover,
  &:focus {
    fill: ${vars.colors.redText};
  }
`;

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Item = styled.li``;

export const AnchorLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: ${vars.colors.whiteText};

  font-size: 24px;
  font-weight: 600;
  line-height: 1.2em;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: ${vars.colors.redText};
  }
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
`;

export const Box = styled.div`
  width: 16px;
  height: 16px;
`;
