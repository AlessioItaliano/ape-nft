import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const List = styled.ul`
  display: flex;
  // flex-direction: row-reverse;
  width: 100%;
  height: 100%;
  justify-content: center;
  //  ${props => (props.type === 'header' ? null : 'center')};
  align-items: center;
  ${props => (props.type === 'header' ? null : 'center')};
  gap: ${props => (props.type === 'header' ? null : '16px')};

  flex-direction: ${props => (props.type === 'header' ? 'row' : 'column')};
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

  width: ${props => (props.type === 'header' ? 'inherit' : null)};
  height: ${props => (props.type === 'header' ? 'inherit' : null)};
  padding: ${props => (props.type === 'header' ? '10px' : null)};

  color: ${props =>
    props.type === 'header' ? 'inherit' : vars.colors.whiteText};

  &:hover,
  &:focus {
    color: ${props =>
      props.type === 'header' ? vars.colors.whiteText : vars.colors.redText};
    text-decoration: ${props => (props.type === 'header' ? 'underline' : null)};
  }
`;
