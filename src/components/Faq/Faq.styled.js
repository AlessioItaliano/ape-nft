import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;

  fill: ${variables.colors.whiteText};
`;

// export const Description = styled.p`
//   color: ${variables.colors.whiteText};

//   text-align: center;
//   text-transform: uppercase;

//   width: 213px;
// `;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  // padding: 8px;
`;

export const Item = styled.li`
  color: ${variables.colors.whiteText};

  display: flex;
  // justify-content: space-between;
  gap: 8px;
  // text-align: center;
  padding: 8px;

  // font-family: ${variables.fonts.grotesk};
  // font-size: 20px;
  // font-weight: 900;
  // line-height: 1em;
  // text-transform: uppercase;
  counter-increment: list-counter;
  // margin-left: 40px;
  // padding-left: 40px;
  position: relative;

  cursor: pointer;

  &:focus,
  &:hover {
    color: ${variables.colors.redText};
    border-radius: 12px;
    background-color: ${variables.colors.bgTertiary};
    // padding: 8px;
  }

  &::before {
    content: '[ ' counter(list-counter) ' ]  ';
    color: ${variables.colors.redText};
    font-family: ${variables.fonts.biro};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.66em;
    white-space: nowrap;
    padding-top: 4px;
  }

  &:focus::before,
  &:hover::before {
    color: ${variables.colors.whiteText};
  }
`;

export const Main = styled.p`
  font-family: ${variables.fonts.grotesk};
  font-size: 20px;
  font-weight: 900;
  line-height: 1em;
  text-transform: uppercase;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Description = styled.p`
  display: none;
  color: ${variables.colors.whiteText};

  font-family: ${variables.fonts.messina};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.16em;
  text-transform: uppercase;

  ${Item}:hover & {
    display: block;
  }
`;
