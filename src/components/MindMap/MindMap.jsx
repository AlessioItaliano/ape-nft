import { useMediaQuery } from 'react-responsive';

import Title from 'components/Title';
import Slider from 'components/Slider';
import MindMapItem from 'components/MindMapItem';
import MindMapList from 'components/MindMapList';

import { mind } from 'data/mindMap';

import { vars } from 'stylesheet/variables';

import * as s from './MindMap.styled';

const MindMap = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${vars.breakpoints.mobileMax})`,
  });

  return (
    <s.Container>
      <Title name="Mind map" />
      {isMobile ? (
        <Slider data={mind}>
          <MindMapItem />
        </Slider>
      ) : (
        <MindMapList data={mind}>
          <MindMapItem />
        </MindMapList>
      )}
    </s.Container>
  );
};

export default MindMap;
