import styled from 'styled-components';

import { Field, Form, ErrorMessage } from 'formik';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;
  width: 216px;
`;

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
  // width: 100%; /* Додайте цей стиль */
  // max-width: 216px; /* Або цей стиль, в залежності від вашого бажаного поведінки */
`;

export const FieldInput = styled(Field)`
  display: flex;
  width: 100%;
  height: auto;
  padding: 22px 24px;
  align-items: center;
  border-radius: 0px 8px 8px 0px;
  outline: none;
  width: 168px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    width: 200px;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    width: 333px;
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

export const FieldContainer = styled.div`
  display: flex;
  // flex-direction: column;
  align-items: center;
  // gap: 24px;
  // width: 100%;

  border-radius: 8px;
  background: ${variables.colors.bgTertiary};

  backdrop-filter: blur(6px);

  position: relative;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${variables.colors.secondary};

  padding: 10px;

  width: 64px;
  height: 64px;

  border-radius: 8px 0px 0px 8px;
  background: #1e1e1e;

  backdrop-filter: blur(6px);
`;

export const Box = styled.div`
  width: 24px;
  height: 24px;
`;

export const Error = styled(ErrorMessage)`
  font-size: 10px;
  line-height: 1.2em;

  position: absolute;
  bottom: -13px;
  right: 0;

  color: ${variables.colors.redText};
  text-transform: uppercase;
`;
