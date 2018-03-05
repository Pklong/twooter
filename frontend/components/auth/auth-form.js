import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, signup } from '../../actions/session'

class AuthForm extends Component {
  state = {
    name: '',
    password: '',
    imgSrc: ''
  }

  action = this.props.location.pathname.slice(1)

  onFieldChange = field => {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const user = new FormData()
    const { name, password } = this.state
    user.append('user[name]', name)
    user.append('user[password]', password)
    user.append('user[avatar]', this.fileInput.files[0])
    this.props[this.action](user)
  }

  onFileChange = () => {
    const reader = new FileReader()
    reader.onload = e => this.setState({ imgSrc: e.target.result })
    reader.readAsDataURL(this.fileInput.files[0])
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={this.onFieldChange('name')}
        />
        <input
          type="password"
          name="password"
          onChange={this.onFieldChange('password')}
        />
        <label htmlFor="file">Upload a picture</label>
        <input
          type="file"
          ref={input => {
            this.fileInput = input
          }}
          name="file"
          onChange={this.onFileChange}
        />
        {this.state.img !== '' && <img src={this.state.img} />}
        <input type="submit" value={this.action} />
      </form>
    )
  }
}

export default connect(null, { login, signup })(AuthForm)
