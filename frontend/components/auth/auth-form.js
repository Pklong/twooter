import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, signup } from '../../actions/session'

class AuthForm extends Component {
  state = {
    name: '',
    password: ''
  }

  action = this.props.location.pathname.slice(1)

  onFieldChange = field => {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, password } = this.state
    this.props[this.action](name, password)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.onFieldChange('name')} />
        <input
          type="password"
          onChange={this.onFieldChange('password')}
        />
        <input type="submit" value={this.action} />
      </form>
    )
  }
}

export default connect(null, { login, signup })(AuthForm)
