import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './App';
import UserForm from './user/UserForm';
import UserIndexContainer from './user/UserIndexContainer';
import WootIndexContainer from './woots/WootsIndexContainer';
import UserShowContainer from './user/UserShowContainer';

const NotFound = () => (
  <h1>404 Buddy!</h1>
);

const Root = ({ store }) => {
  function redirectIfLoggedIn(_, replace) {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/woots');
    }
  }

  function redirectIfLoggedOut(_, replace) {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={UserForm} />
          <Route path="signup" component={UserForm} onEnter={redirectIfLoggedIn} />
          <Route path="users" component={UserIndexContainer} />
          <Route path="users/:name" component={UserShowContainer} />
          <Route path="woots" component={WootIndexContainer} onEnter={redirectIfLoggedOut} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>
  );
};

export default Root;
