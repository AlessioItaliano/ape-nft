import MindMapSlider from 'components/MindMapSlider';
import Title from 'components/Title';

import * as s from './MindMap.styled';

const MindMap = () => {
  return (
    <s.Container>
      <Title name="Mind map" />
      <MindMapSlider />
    </s.Container>
  );
};

export default MindMap;
