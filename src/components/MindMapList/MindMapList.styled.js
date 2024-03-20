import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;

export const Item = styled.li`
width: 100%;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // align-items: flex-start;

  // width: 216px;
  // height: 242px;
  // padding: 24px 12px;

  // border-radius: 12px;
  // background: ${variables.colors.bgTertiary};
`;

export const Title = styled.h3`
  color: ${variables.colors.whiteText};
  font-family: ${variables.fonts.grotesk};
  font-size: 32px;
  font-weight: 900;
  line-height: 1em;
  text-transform: uppercase;
`;

export const Description = styled.p`
  color: ${variables.colors.whiteText};
  text-transform: uppercase;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: flex-end;

  width: 216px;
  height: 242px;
  padding: 24px 12px;
  border-radius: 12px;

  // box-sizing: border-box;
  background: ${variables.colors.bgSecondary};

  position: relative;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 24px;
  height: 24px;

  padding: 12px;

  cursor: pointer;

  fill: ${variables.colors.whiteText};

  ${LinkContainer}:hover & {
    top: 6px;
    right: 6px;
  }
`;
