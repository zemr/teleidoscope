import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import ScopeView from './scope/ScopeView';
import PatternView from './pattern/PatternView';

import './styles.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PatternView} />
        <Route path="scope" component={ScopeView} />
        <Route path="scope/:patternId" component={ScopeView} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
