import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import ScopeView from './scope/ScopeView';
import PatternView from './pattern/PatternView';

import './styles.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="scope" component={ScopeView}/>
        <Route path="scope/:patternId" component={ScopeView}/>
        <Route path="pattern" component={PatternView}/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
