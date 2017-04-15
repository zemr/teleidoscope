import React from 'react';

const patterns = [
  {source: process.env.PUBLIC_URL + '/cells/cell_1_1.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_1_2.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_1_3.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_1_4.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_1_5.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_1_6.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_1_7.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_1_8.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_1_9.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_2_1.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_2_2.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_2_3.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_2_4.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_2_5.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_2_6.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_2_7.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_2_8.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_2_9.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_3_1.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_3_2.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_3_3.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_3_4.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_3_5.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_3_6.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_3_7.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_3_8.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_3_9.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_4_1.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_4_2.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_4_3.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_4_4.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_4_5.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_4_6.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_4_7.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_4_8.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_4_9.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_5_1.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_5_2.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_5_3.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_5_4.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_5_5.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_5_6.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_5_7.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_5_8.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_5_9.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_6_1.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_6_2.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_6_3.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_6_4.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_6_5.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_6_6.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_6_7.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_6_8.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_6_9.png'}
];

const cells = (activeCell) => {
  return (
    patterns.filter(pattern =>
      pattern.source.split('_')[1] === activeCell.split('_')[1]
    ).filter(pattern =>
      pattern.source.split('_')[2] !== activeCell.split('_')[2]
    )
  );
};

const newCell = (set) => {
  return set[Math.floor(Math.random()*set.length)];
};

const ScopeButton = (props) => {
  return (
    <span onClick={() => props.changePattern(newCell(cells(props.pattern)).source)} className="button-label">
      &#9881;
    </span>
  );
};

export default ScopeButton;