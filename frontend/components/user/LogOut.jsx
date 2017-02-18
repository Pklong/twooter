import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../../actions/user_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
});

const mapDispatchToProps = dispatch => ({
  destroySession: () => dispatch(logout()),
});

class LogOut extends Component {
  constructor() {
    super();
    this.leave = this.leave.bind(this);
  }
  leave() {
    const { destroySession, router } = this.props;
    destroySession().then(() => {
      router.push('/');
    });
  }
  render() {
    if (this.props.loggedIn) {
      return (
        <button onClick={this.leave}>
          Log Out
        </button>
      );
    }
    return null;
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogOut));
