import styled from 'styled-components';
import { vars } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
`;

export const Box = styled.div`
  width: 48px;
  fill: ${props =>
    props.theme === 'dark' ? vars.colors.blackText : vars.colors.whiteText};

  &:hover,
  &:focus,
  &:active{
    fill: ${props =>
      props.theme === 'dark' ? vars.colors.whiteText : vars.colors.redText};
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    width: 72px;
  }
`;
