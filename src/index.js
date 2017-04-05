import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Hexagon from './figures/hexagon';
import Hexagon6p from './figures/hexagon-6p';
import Hexagon12p from './figures/hexagon-12p';
import Hexagon6L from './figures/hexagon-6L';
import Hexagon6M from './figures/hexagon-6M';
import Hexagon6s from './figures/hexagon-6s';
import Hexagon6sm from './figures/hexagon-6sm';
import Hexagon6smm from './figures/hexagon-6smm';

import './styles.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="hexagon" component={Hexagon}/>
        <Route path="hexagon-6p" component={Hexagon6p}/>
        <Route path="hexagon-12p" component={Hexagon12p}/>
        <Route path="hexagon-6L" component={Hexagon6L}/>
        <Route path="hexagon-6M" component={Hexagon6M}/>
        <Route path="hexagon-6s" component={Hexagon6s}/>
        <Route path="hexagon-6sm" component={Hexagon6sm}/>
        <Route path="hexagon-6smm" component={Hexagon6smm}/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
