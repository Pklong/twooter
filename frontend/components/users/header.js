import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session'
import { Link, withRouter } from 'react-router-dom'

const Header = ({ name, logout, location: { pathname } }) => {
  const linkTo = pathname === '/signup' ? 'login' : 'signup'
  return name ? (
    <button onClick={logout}>Logout, {name}</button>
  ) : (
    <Link to={linkTo}>{linkTo}</Link>
  )
}

const mapStateToProps = ({ session: { userId }, users }) => {
  return {
    name: users[userId] && users[userId].name
  }
}
export default withRouter(connect(mapStateToProps, { logout })(Header))
