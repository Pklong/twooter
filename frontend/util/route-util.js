import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

const proRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }}
  />
)

const authRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return loggedIn ? (
        <Redirect
          to={{
            pathname: '/users',
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} />
      )
    }}
  />
)

const mapStateToProps = ({ session: { userId } }) => ({
  loggedIn: !!userId
})

export const ProtectedRoute = withRouter(
  connect(mapStateToProps)(proRoute)
)
export const AuthRoute = withRouter(connect(mapStateToProps)(authRoute))
