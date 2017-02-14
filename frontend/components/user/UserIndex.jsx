import React from 'react';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const users = this.props.users.map(u => <li key={u.id}>{u.name}</li>);
    return (
      <ul>
        {users}
      </ul>
    );
  }
}

UserIndex.propTypes = {
  fetchUsers: React.PropTypes.func,
  users: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default UserIndex;
