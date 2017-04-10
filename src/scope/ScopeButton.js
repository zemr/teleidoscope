import React from 'react';

const patterns = [
  {source: process.env.PUBLIC_URL + '/cells/cell_1_1.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_1_2.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_1_3.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_1_4.png'}
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
    <button onClick={ () => props.changePattern(newCell(cells(props.pattern)).source) }>
      move
    </button>
  );
};

export default ScopeButton;