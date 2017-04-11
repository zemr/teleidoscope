import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Hexagon6sm from './figures/hexagon-6sm';
import Hexagon6CM from './figures/hexagon-6CM';
import Hexagon6F from './figures/hexagon-6F';
import Hexagon6G from './figures/hexagon-6G';
import ScopeView from './scope/ScopeView';
import PatternView from './pattern/PatternView';

import './styles.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="hexagon-6sm" component={Hexagon6sm}/>
        <Route path="hexagon-6CM" component={Hexagon6CM}/>
        <Route path="hexagon-6F" component={Hexagon6F}/>
        <Route path="hexagon-6G" component={Hexagon6G}/>
        <Route path="scope" component={ScopeView}/>
        <Route path="pattern" component={PatternView}/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
