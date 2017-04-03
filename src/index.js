import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Rectangle from './figures/rectangle';
import Circle from './figures/circle';
import Triangle from './figures/triangle';

import './styles.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="rectangle" component={Rectangle}/>
        <Route path="triangle" component={Triangle}/>
        <Route path="circle" component={Circle}/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
