import styled from 'styled-components';

import { Field, Form, ErrorMessage } from 'formik';

import { variables } from 'stylesheet/variables';

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
  max-width: 216px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    max-width: 247px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    max-width: 397px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  width: 100%;

  border-radius: 8px;
  background: ${variables.colors.bgTertiary};
  backdrop-filter: blur(6px);
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  width: 48px;
  height: 48px;

  border-radius: 8px 0px 0px 8px;

  fill: ${variables.colors.secondary};
  background: ${variables.colors.bgTertiary};
  backdrop-filter: blur(6px);

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    width: 64px;
    height: 64px;
  }
`;

export const Box = styled.div`
  width: 24px;
  height: 24px;
`;

export const Input = styled(Field)`
  display: flex;
  align-items: center;
  outline: none;

  width: 100%;
  padding: 16px 24px;

  border-radius: 0px 8px 8px 0px;

  font-size: 12px;
  text-transform: uppercase;

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 16px;
    line-height: 1.18em;
    padding: 22px 24px;
  }

  color: ${props =>
    props.error ? variables.colors.redText : variables.colors.whiteText};
  border: 1px solid
    ${props =>
      props.error ? variables.colors.redText : variables.colors.bgTertiary};
  background-color: ${variables.colors.bgMain};

  &::placeholder {
    color: ${variables.colors.placeholder};
  }

  &:hover,
  &:focus,
  &:active {
    color: ${variables.colors.whiteText};
    border: 1px solid ${variables.colors.whiteText};
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -13px;
  right: 0;

  font-size: 10px;
  line-height: 1.2em;
  text-transform: uppercase;

  color: ${variables.colors.redText};

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    font-size: 12px;
    line-height: 1.16em;
  }
`;
