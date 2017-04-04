import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => (
  <div className="sidebar">
    <div>
      <Link to="/rectangle">
        rectangle
      </Link>
    </div>

    <div>
      <Link to="/triangle">
        triangle
      </Link>
    </div>

    <div>
      <Link to="/circle">
        circle
      </Link>
    </div>

    <div>
      <Link to="/hexagon">
        hexagon
      </Link>
    </div>

    <div>
      <Link to="/hexagon-6p">
        hexagon 6p
      </Link>
    </div>

    <div>
      <Link to="/hexagon-12p">
        hexagon 12p
      </Link>
    </div>

    <div>
      <Link to="/hexagon-6L">
        hexagon 6L
      </Link>
    </div>

    <div>
      <Link to="/hexagon-6M">
        hexagon 6M
      </Link>
    </div>
  </div>
);

export default Sidebar;
