import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => (
  <div className="sidebar">
    <div>
      <Link to="/scope">
        scope
      </Link>
    </div>

    <div>
      <Link to="/pattern">
        pattern
      </Link>
    </div>
  </div>
);

export default Sidebar;
