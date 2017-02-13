import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../store/store';


const NotFound = () => (
  <h1>404 Buddy!</h1>
);

const App = () => (
  <h1>I am App</h1>
);
const Root = () => (
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);

export default Root;
