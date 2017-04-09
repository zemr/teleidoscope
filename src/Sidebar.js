import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => (
  <div className="sidebar">
    <div>
      <Link to="/hexagon-6sm">
        hexagon 6sm
      </Link>
    </div>

    <div>
      <Link to="/hexagon-6CM">
        hexagon 6CM
      </Link>
    </div>

    <div>
      <Link to="/hexagon-6F">
        hexagon 6F
      </Link>
    </div>

    <div>
      <Link to="/hexagon-6G">
        hexagon 6G
      </Link>
    </div>

    <div>
      <Link to="/scope">
        scope
      </Link>
    </div>
  </div>
);

export default Sidebar;
