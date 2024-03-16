import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const Footer = styled.footer`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;

  // height: auto;
  // width: 100%;
  padding: 24px 0 30px 0;

  background-color: ${variables.colors.bgMain};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding: 40px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    padding-top: 60px;
  }
`;

export const CopyRight = styled.p`
  font-size: 10px;
  line-height: 1.71;
  font-weight: 400;

  color: ${variables.colors.secondary};

  text-align: center;
  text-transform: uppercase;
`;
