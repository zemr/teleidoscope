import React from 'react';
import { Link } from 'react-router';

const PatternView = () => {
  return (
    <div className="pattern-container">
      <Link to="/scope/1">
        <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="" className="pattern" />
      </Link>
      <Link to="/scope/2">
        <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="" className="pattern" />
      </Link>
      <Link to="/scope/3">
       <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="" className="pattern" />
      </Link>
      <Link to="/scope/4">
        <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="" className="pattern" />
      </Link>
      <Link to="/scope/5">
      <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="" className="pattern" />
      </Link>
      <Link to="/scope/6">
      <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="" className="pattern" />
      </Link>
    </div>
  );
};

export default PatternView;
