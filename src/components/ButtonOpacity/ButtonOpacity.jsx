import * as s from './ButtonOpacity.styled';

const ButtonOpacity = ({ name, type }) => {
  return <s.Button type={type}>{name}</s.Button>;
};

export default ButtonOpacity;
