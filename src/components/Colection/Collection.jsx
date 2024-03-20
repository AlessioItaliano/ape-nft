// import CollectionSlider from 'components/CollectionSlider';
import Title from 'components/Title';

import * as s from './Collection.styled';
import Slider from 'components/Slider';
import CollectionItem from 'components/CollectionItem';
import { useMediaQuery } from 'react-responsive';

import { variables } from 'stylesheet/variables';

import { imagesMobile, imagesDesktop } from 'data/images';

const Collection = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${variables.breakpoints.mobileMax})`,
  });

  return (
    <s.Container>
      <Title name="Collection" />
      <Slider data={isMobile ? imagesMobile : imagesDesktop}>
        <CollectionItem />
      </Slider>
    </s.Container>
  );
};

export default Collection;
