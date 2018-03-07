import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, signup } from '../../actions/session'

class AuthForm extends Component {
  state = {
    name: '',
    password: ''
  }

  onFieldChange = field => {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const user = new FormData()
    const { name, password } = this.state
    user.append('user[name]', name)
    user.append('user[password]', password)
    this.props[this.props.action](user)
  }

  onFileChange = () => {
    const reader = new FileReader()
    reader.onload = e => this.setState({ imgSrc: e.target.result })
    reader.readAsDataURL(this.fileInput.files[0])
  }

  render() {
    const { action } = this.props
    return (
      <form className={action} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Username"
          onChange={this.onFieldChange('name')}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.onFieldChange('password')}
        />
        <input type="submit" value={action} />
      </form>
    )
  }
}

const LoginForm = () => <AuthForm action="login" />

const SignupForm = () => <AuthForm action="signup" />

export const Login = connect(null, { login })(LoginForm)
export const Signup = connect(null, { signup })(SignupForm)
