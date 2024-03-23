import { useMediaQuery } from 'react-responsive';

import Title from 'components/Title';
import Slider from 'components/Slider';
import CollectionItem from 'components/CollectionItem';

import { vars } from 'stylesheet/variables';
import { collectionImagesMobile, collectionImagesDesktop } from 'data/images';

import * as s from './Collection.styled';

const Collection = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${vars.breakpoints.tablet} - 1px)`,
  });

  return (
    <s.Container>
      <Title name="Collection" />
      <Slider
        data={isMobile ? collectionImagesMobile : collectionImagesDesktop}
      >
        <CollectionItem />
      </Slider>
    </s.Container>
  );
};

export default Collection;
