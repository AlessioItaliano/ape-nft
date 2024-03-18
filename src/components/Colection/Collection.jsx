import CollectionSlider from 'components/CollectionSlider';
import Title from 'components/Title';

import * as s from './Collection.styled';

const Collection = () => {
  return (
    <s.Container>
      <Title name="Collection" />
      <CollectionSlider />
    </s.Container>
  );
};

export default Collection;
