import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TwootFormContainer from './TwootFormContainer';
import Twoot from './Twoot';
import Loader from '../shared/Loader';
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
    const { currentUserId, twoots } = this.props;

    const mappedTwoots = twoots.map(t =>
      <Twoot
        key={t.id}
        userTwoot={currentUserId === t.user_id}
        twoot={t}
        deleteTwoot={this.deleteTwoot(t.id)}
      />
    );
    return (
      <article>
        <TwootFormContainer />
        <ul>
          { mappedTwoots.length === 0 ? <Loader /> : mappedTwoots }
        </ul>
      </article>
    );
  }
}

TwootIndex.propTypes = {
  currentUserId: PropTypes.number,
  destroyTwoot: PropTypes.fun.isRequired,
  fetchTwoots: PropTypes.func.isRequired,
  twoots: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

TwootIndex.defaultProps = {
  currentUserId: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TwootIndex);
