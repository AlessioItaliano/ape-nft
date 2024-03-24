import * as s from './Button.styled';

const Button = ({ name, type, disabled }) => {
  return (
    <s.Button type={type} disabled={disabled}>
      {name}
    </s.Button>
  );
};

export default Button;
