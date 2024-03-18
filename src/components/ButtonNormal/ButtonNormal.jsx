import * as s from './ButtonNormal.styled';

const ButtonNormal = ({ name, type }) => {
  return <s.Button type={type}>{name}</s.Button>;
};

export default ButtonNormal;
