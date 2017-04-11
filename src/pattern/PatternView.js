import React from 'react';

const PatternView = () => {
  return (
    <div className="pattern-container">
      <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="" className="pattern" />
      <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="" className="pattern" />
      <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="" className="pattern" />
      <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="" className="pattern" />
      <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="" className="pattern" />
      <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="" className="pattern" />
    </div>
  );
};

export default PatternView;
