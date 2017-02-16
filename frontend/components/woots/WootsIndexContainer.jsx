import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchWoots } from '../../actions/woot_actions';

const mapStateToProps = ({ woots }) => ({
  woots: woots.allIds.map(wId => woots.byId[wId]),
});

const mapDispatchToProps = dispatch => ({
  fetchWoots: () => dispatch(fetchWoots()),
});

class WootIndex extends Component {
  componentDidMount() {
    this.props.fetchWoots();
  }

  render() {
    const woots = this.props.woots.map((w) => {
      return (
        <li key={w.id}>{w.body}
          <Link to={`/users/${w.author}`}>{w.author}</Link>
        </li>
      );
    });
    return (
      <ul>
        { woots }
      </ul>
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
