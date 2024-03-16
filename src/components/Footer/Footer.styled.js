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

  // box-shadow: 0 -4px 4px ${variables.colors.boxShadow};
  // border-radius: 12px 12px 0 0;

  background-color: ${variables.colors.bgMain};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    padding: 40px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    padding-top: 60px;
  }
`;

export const CopyRight = styled.p`
  color: ${variables.colors.secondary};
  font-size: 10px;
  line-height: 1.71;

  color: #fff;

  text-align: center;
  font-family: 'Messina Sans Mono';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  text-transform: uppercase;
`;
