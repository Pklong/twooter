import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = ({ users }) => {
  return { userDetail: users.detail };
};

const mapDispatchToProps = dispatch => {
  return { fetchUser: name => dispatch(fetchUser(name)) };
};

class UserShow extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.params.name);
  }
  render() {
    const { name, wootCount } = this.props.userDetail;
    return (
      <article>
        <p>{name}</p>
        <p>WOOTS: {wootCount}</p>
      </article>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
