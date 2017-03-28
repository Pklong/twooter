import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Twoot = ({ twoot: { body, author }, deleteTwoot, userTwoot }) => (
  <li>{body}
    <Link to={`/users/${author}`}>{author}</Link>
    { userTwoot ? <button onClick={deleteTwoot}>Delete</button> : null }
  </li>
);

Twoot.propTypes = {
  twoot: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,
  deleteTwoot: PropTypes.func.isRequired,
  userTwoot: PropTypes.bool.isRequired,
};

Twoot.defaultProps = {
  deleteTwoot: null,
};

export default Twoot;
