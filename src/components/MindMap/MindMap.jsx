import Slider from 'components/Slider';

import * as s from './MindMap.styled';
import MindMapItem from 'components/MindMapItem';

const MindMap = () => {
  // const slides = [
  //   {
  //     description:
  //       'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own',
  //     title: 'YAPE DROP',
  //   },
  //   {
  //     description:
  //       'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own',
  //     title: 'YAPE DROP',
  //   },
  //   {
  //     description:
  //       'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own',
  //     title: 'YAPE DROP',
  //   },
  //   {
  //     description:
  //       'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own',
  //     title: 'YAPE DROP',
  //   },
  // ];

  return (
    <s.Container>
      <s.Title>Mind map</s.Title>
      <Slider wrapper={MindMapItem} />
    </s.Container>
  );
};

export default MindMap;
