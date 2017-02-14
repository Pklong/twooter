import { connect } from 'react-redux';

import UserIndex from './UserIndex';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = ({ users }) => {
  return { users: users.allIds.map(id => users.byId[id]) };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
