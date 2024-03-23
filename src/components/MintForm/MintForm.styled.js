import styled from 'styled-components';

import { Field, Form, ErrorMessage } from 'formik';

import { vars } from 'stylesheet/variables';

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
  max-width: 216px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    max-width: 247px;
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    max-width: 397px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  width: 100%;

  border-radius: 8px;
  background: ${vars.colors.bgTertiary};
  backdrop-filter: ${vars.filters.blur};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  width: 48px;
  height: 48px;

  border-radius: 8px 0px 0px 8px;

  fill: ${vars.colors.secondary};
  background: ${vars.colors.bgTertiary};
  backdrop-filter: ${vars.filters.blur};

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
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

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 16px;
    line-height: 1.18em;
    padding: 22px 24px;
  }

  color: ${props =>
    props.error ? vars.colors.redText : vars.colors.whiteText};
  border: 1px solid
    ${props => (props.error ? vars.colors.redText : vars.colors.bgTertiary)};
  background-color: ${vars.colors.bgMain};

  &::placeholder {
    color: ${vars.colors.placeholder};
  }

  &:hover,
  &:focus,
  &:active {
    color: ${vars.colors.whiteText};
    border: 1px solid ${vars.colors.whiteText};
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -13px;
  right: 0;

  font-size: 10px;
  line-height: 1.2em;
  text-transform: uppercase;

  color: ${vars.colors.redText};

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    font-size: 12px;
    line-height: 1.16em;
  }
`;
