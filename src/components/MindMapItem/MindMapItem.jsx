import { ReactComponent as ArrowIcon } from 'icons/arrow-top-right.svg';

import * as s from './MindMapItem.styled';

const MindMapItem = ({ item }) => {
  const renderContent = () => {
    if (item.type === 'link') {
      return (
        <a href={item.link} rel="noopener noreferrer nofollow">
          <s.Container type="link">
            <s.IconContainer>
              <ArrowIcon />
            </s.IconContainer>
            <s.Title>{item.title}</s.Title>
          </s.Container>
        </a>
      );
    } else {
      return (
        <s.Container>
          <s.Box>
            <s.Description>{item.description}</s.Description>
          </s.Box>
          <s.Title>{item.title}</s.Title>
        </s.Container>
      );
    }
  };

  return renderContent();
};

export default MindMapItem;
