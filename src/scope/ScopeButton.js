import React from 'react';

const patterns = [
  {source: process.env.PUBLIC_URL + '/cells/cell_1_1.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_1_2.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_2_3.png'},
  {source: process.env.PUBLIC_URL + '/cells/cell_2_4.png'}
];

const ScopeButton = (props) => {
  return (
    <button onClick={ () => props.changePattern(patterns[1].source) }>
      move
    </button>
  );
};

export default ScopeButton;