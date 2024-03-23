import React from 'react';
import * as s from './MindMapList.styled';

const MindMapList = ({ data, children }) => {
  return (
    <s.List>
      {data.map((item, index) => (
        <li key={index}>{React.cloneElement(children, { item })}</li>
      ))}
    </s.List>
  );
};

export default MindMapList;
