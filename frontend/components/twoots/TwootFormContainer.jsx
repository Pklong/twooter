import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createTwoot } from '../../actions/twoot_actions';

const mapDispatchToProps = dispatch => ({
  createTwoot: (twoot) => dispatch(createTwoot(twoot))
});

class TwootForm extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      body: '',
    };
  }
  submit(e) {
    e.preventDefault();
    this.props.createTwoot(this.state).then(() => this.setState({ body: '' }));
  }
  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <textarea
          onChange={this.handleInput}
          placeholder="What's happening?"
          value={this.state.body}></textarea>
        <input
          type="submit" value="Twoot"
        />
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(TwootForm);
