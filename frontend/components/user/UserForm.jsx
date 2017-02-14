import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/user_actions';

const mapStateToProps = ({ session }) => ({
  errors: session.errors,
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType =
    (location.pathname === '/signup') ?
      signup :
      login;

  return {
    processForm: user => dispatch(formType(user)),
  };
};


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      password: '',
    };
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(
      () => this.props.router.push('/users'),
      () => this.setState({ name: '', password: '' }),
    );
  }

  render() {
    return (
      <article>
        <h1>{
            this.props.location.pathname === '/signup' ?
            'Create an Account' :
            'Log In'
          }</h1>
        <p>{Object.keys(this.props.errors).map(e => `${e} ${this.props.errors[e][0]}`)}</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleInput('name')}
            placeholder="name?"
            value={this.state.name}
          />
          <input
            type="password"
            onChange={this.handleInput('password')}
            placeholder="password?"
            value={this.state.password}
          />
          <input type="submit" value="Sign Up" />
        </form>
      </article>
    );
  }
}

UserForm.propTypes = {
  processForm: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
};

UserForm.defaultProps = {
  errors: [''],
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
