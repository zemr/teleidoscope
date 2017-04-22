import React from 'react';
import { Link } from 'react-router';

const PatternView = () => {
  return (
    <div className="patterns-container">
      <Link to="/scope/1">
        <div className="pattern">
          <img src={process.env.PUBLIC_URL + '/patterns/pattern_1.png'} alt="pattern1" />
          <span className="pattern-source">Vecteezy.com</span>
        </div>
      </Link>
      <Link to="/scope/2">
        <div className="pattern">
          <img src={process.env.PUBLIC_URL + '/patterns/pattern_2.png'} alt="pattern2" />
          <span className="pattern-source">PeHaa.com</span>
        </div>
      </Link>
      <Link to="/scope/3">
        <div className="pattern">
          <img src={process.env.PUBLIC_URL + '/patterns/pattern_3.png'} alt="pattern3" />
          <span className="pattern-source">PeHaa.com</span>
        </div>
      </Link>
      <Link to="/scope/4">
        <div className="pattern">
          <img src={process.env.PUBLIC_URL + '/patterns/pattern_4.png'} alt="pattern4" />
          <span className="pattern-source">Vecteezy.com</span>
        </div>
      </Link>
      <Link to="/scope/5">
        <div className="pattern">
          <img src={process.env.PUBLIC_URL + '/patterns/pattern_5.png'} alt="pattern5" />
          <span className="pattern-source">Vecteezy.com</span>
        </div>
      </Link>
      <Link to="/scope/6">
        <div className="pattern">
          <img src={process.env.PUBLIC_URL + '/patterns/pattern_6.png'} alt="pattern6" />
          <span className="pattern-source">Vecteezy.com</span>
        </div>
      </Link>
      <div className="sources">
        Graphics by <a target="_blank" href="https://www.vecteezy.com">Vecteezy</a>, <a target="_blank" href="http://pehaa.com/">PeHaa</a>
      </div>
    </div>
  );
};

export default PatternView;
