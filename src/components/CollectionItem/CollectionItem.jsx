import * as s from './CollectionItem.styled';

const CollectionItem = ({ item }) => {
  return (
    <s.ImageContainer>
      <s.Image
        srcSet={`${item.image1x} 1x, ${item.image2x} 2x`}
        src={item.image1x}
        alt={item.alt}
      />
    </s.ImageContainer>
  );
};

export default CollectionItem;
