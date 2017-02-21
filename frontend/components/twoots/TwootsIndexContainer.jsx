import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import TwootFormContainer from './TwootFormContainer';
import { fetchTwoots, destroyTwoot } from '../../actions/twoot_actions';

const mapStateToProps = ({ twoots, session }) => ({
  twoots: twoots.allIds.map(wId => twoots.byId[wId]),
  currentUserId: session.currentUser ? session.currentUser.id : null,
});

const mapDispatchToProps = dispatch => ({
  fetchTwoots: () => dispatch(fetchTwoots()),
  destroyTwoot: id => dispatch(destroyTwoot(id)),
});

class TwootIndex extends Component {
  constructor() {
    super();
    this.deleteTwoot = this.deleteTwoot.bind(this);
  }
  componentDidMount() {
    this.props.fetchTwoots();
  }

  deleteTwoot(id) {
    return () => this.props.destroyTwoot(id);
  }
  render() {
    const { currentUserId, twoots, deleteTwoot } = this.props;
    const mappedTwoots = twoots.map((t) => {
      let deleteBtn;
      if (currentUserId === t.user_id) {
        deleteBtn = <button onClick={this.deleteTwoot(t.id)}>Delete Twoot</button>;
      } else {
        deleteBtn = null;
      }
      return (
        <li key={t.id}>{t.body}
          <Link to={`/users/${t.author}`}>{t.author}</Link>
          { deleteBtn }
        </li>
      );
    });
    return (
      <article>
        <TwootFormContainer />
        <ul>
          { mappedTwoots }
        </ul>
      </article>
    );
  }
}

TwootIndex.propTypes = {
  fetchTwoots: PropTypes.func.isRequired,
  twoots: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TwootIndex);
