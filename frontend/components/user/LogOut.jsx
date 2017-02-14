import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../../actions/user_actions';

const mapDispatchToProps = dispatch => ({
  destroySession: () => dispatch(logout()),
});

const LogOut = ({ router, destroySession }) => {
  const whatever = () => destroySession().then(() => {
    router.push('/')
  });

  return (
    <button onClick={whatever}>
      Log Out
    </button>
  );
};

export default withRouter(connect(null, mapDispatchToProps)(LogOut));
