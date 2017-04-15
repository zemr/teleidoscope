import React from 'react';
import { Link } from 'react-router';

const PatternView = () => {
  return (
    <div className="patterns-container">
      <Link to="/scope/1">
        <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="" className="pattern" />
      </Link>
      <Link to="/scope/2">
        <img src={process.env.PUBLIC_URL + '/patterns/pattern_2.png'} alt="" className="pattern" />
      </Link>
      <Link to="/scope/3">
       <img src={process.env.PUBLIC_URL + '/patterns/pattern_3.png'} alt="" className="pattern" />
      </Link>
      <Link to="/scope/4">
        <img src={process.env.PUBLIC_URL + '/patterns/pattern_4.png'} alt="" className="pattern" />
      </Link>
      <Link to="/scope/5">
      <img src={process.env.PUBLIC_URL + '/patterns/pattern_5.png'} alt="" className="pattern" />
      </Link>
      <Link to="/scope/6">
      <img src={process.env.PUBLIC_URL + '/patterns/pattern_6.png'} alt="" className="pattern" />
      </Link>
    </div>
  );
};

export default PatternView;
