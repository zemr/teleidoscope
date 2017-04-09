import React from 'react';
import pattern from '../patterns/pattern1b.png';

const ScopeButton = (props) => {
  return (
    <button onClick={() => { props.changePattern({pattern}); }}>
      move
    </button>
  );
};

export default ScopeButton;