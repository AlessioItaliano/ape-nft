import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => (props.type === 'header' ? 'row' : 'column')};

  width: 100%;
  height: 100%;
  transition: translateZ(100%) 0.5s ease-in-out;

  gap: ${props => (props.type === 'header' ? null : '16px')};
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  white-space: nowrap;

  font-size: ${props => (props.type === 'header' ? 'inherit' : '24px')};
  font-weight: ${props => (props.type === 'header' ? 'inherit' : '600')};
  line-height: ${props => (props.type === 'header' ? 'inherit' : '1.2em')};

  width: ${props => (props.type === 'header' ? '48px' : null)};
  height: ${props => (props.type === 'header' ? '48px' : null)};
  padding: ${props => (props.type === 'header' ? '10px' : null)};

  color: ${props =>
    props.type === 'header' ? 'inherit' : vars.colors.whiteText};

  &:hover,
  &:focus,
  &:active {
    color: ${props =>
      props.type === 'header' && props.theme === 'dark'
        ? vars.colors.whiteText
        : vars.colors.redText};
    text-decoration: ${props => (props.type === 'header' ? 'underline' : null)};
  }

  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    width: ${props => (props.type === 'header' ? '80px' : null)};
    height: ${props => (props.type === 'header' ? '80px' : null)};
  }
`;
