import React from 'react';
import * as s from './MindMapList.styled';

const MindMapList = ({ data, children }) => {
  return (
    <s.List>
      {data.map((item, index) => (
        <s.Item key={index}>{React.cloneElement(children, { item })}</s.Item>
      ))}
    </s.List>
  );
};

export default MindMapList;
