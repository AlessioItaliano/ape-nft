import * as s from './Button.styled';

const Button = ({ name, type }) => {
  return <s.Button type={type}>{name}</s.Button>;
};

export default Button;
