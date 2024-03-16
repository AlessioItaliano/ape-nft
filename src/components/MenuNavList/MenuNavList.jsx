import * as s from './MenuNavList.styled';

const MenuNavList = () => {
  return (
    <s.List>
      <s.Item>
        <s.Link href="#mint">Mint</s.Link>
      </s.Item>
      <s.Item>
        <s.Link href="#arts">Arts</s.Link>
      </s.Item>
      <s.Item>
        <s.Link href="#faq">Faq</s.Link>
      </s.Item>
      <s.Item>
        <s.Link href="#m-map">M-map</s.Link>
      </s.Item>
      <s.Item>
        <s.Link href="#about">About</s.Link>
      </s.Item>
    </s.List>
  );
};

export default MenuNavList;
