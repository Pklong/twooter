import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import WootFormContainer from './WootFormContainer';
import { fetchWoots, destroyWoot } from '../../actions/woot_actions';

const mapStateToProps = ({ woots, session }) => ({
  woots: woots.allIds.map(wId => woots.byId[wId]),
  currentUserId: session.currentUser ? session.currentUser.id : null,
});

const mapDispatchToProps = dispatch => ({
  fetchWoots: () => dispatch(fetchWoots()),
  destroyWoot: id => dispatch(destroyWoot(id)),
});

class WootIndex extends Component {
  constructor() {
    super();
    this.deleteWoot = this.deleteWoot.bind(this);
  }
  componentDidMount() {
    this.props.fetchWoots();
  }

  deleteWoot(id) {
    return () => this.props.destroyWoot(id);
  }
  render() {
    const { currentUserId, woots, deleteWoot } = this.props;
    const mappedWoots = woots.map((w) => {
      let deleteBtn;
      if (currentUserId === w.user_id) {
        deleteBtn = <button onClick={this.deleteWoot(w.id)}>Delete Woot</button>;
      } else {
        deleteBtn = null;
      }
      return (
        <li key={w.id}>{w.body}
          <Link to={`/users/${w.author}`}>{w.author}</Link>
          { deleteBtn }
        </li>
      );
    });
    return (
      <article>
        <WootFormContainer />
        <ul>
          { mappedWoots }
        </ul>
      </article>
    );
  }
}

WootIndex.propTypes = {
  fetchWoots: PropTypes.func.isRequired,
  woots: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WootIndex);
