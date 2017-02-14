import React, { Component, PropTypes } from 'react';
import LogOut from './LogOut';

class UserIndex extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const { users } = this.props;
    const names = users.map(u => <li key={u.id}>{u.name}</li>);
    return (
      <ul>
        <LogOut />
        {names}
      </ul>
    );
  }
}

UserIndex.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default UserIndex;
