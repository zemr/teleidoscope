import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Rectangle from './figures/rectangle';
import Circle from './figures/circle';
import Triangle from './figures/triangle';
import Hexagon from './figures/hexagon';
import Hexagon6p from './figures/hexagon-6p';
import Hexagon12p from './figures/hexagon-12p';
import Hexagon6L from './figures/hexagon-6L';

import './styles.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="rectangle" component={Rectangle}/>
        <Route path="triangle" component={Triangle}/>
        <Route path="circle" component={Circle}/>
        <Route path="hexagon" component={Hexagon}/>
        <Route path="hexagon-6p" component={Hexagon6p}/>
        <Route path="hexagon-12p" component={Hexagon12p}/>
        <Route path="hexagon-6L" component={Hexagon6L}/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
