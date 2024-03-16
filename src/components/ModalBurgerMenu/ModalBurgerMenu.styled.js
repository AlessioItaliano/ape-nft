import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// import { ReactComponent as CloseIconBtn } from '../../icons/Catalog/x-close.svg';

import { variables } from '../../stylesheet/variables';

export const Field = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  padding: 16px;
  //   box-sizing: border-box;

  background: ${variables.colors.bgMain};
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
  background: ${variables.colors.bgWithOpacitySecondary};
  color: ${variables.colors.whiteText};
  border: none;

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${variables.colors.redText};
  }
`;

export const Logo = styled.a`
  display: flex;
  width: 50px;
  height: auto;
  gap: 5px;

  margin-bottom: 30px;
  fill: ${variables.colors.whiteText};
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
  fill: ${variables.colors.whiteText};
  background: ${variables.colors.bgWithOpacitySecondary};
  backdrop-filter: blur(6px);

  &:hover,
  &:focus {
    fill: ${variables.colors.redText};
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

export const AnhorLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: ${variables.colors.whiteText};

  font-size: 24px;
  font-weight: 600;
  line-height: 1.2em;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: ${variables.colors.redText};
  }
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
`;

export const CopyRight = styled.p`
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;

  color: ${variables.colors.whiteText};
`;
