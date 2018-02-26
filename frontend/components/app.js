import React from 'react'
import { Route } from 'react-router-dom'
import { ProtectedRoute, AuthRoute } from '../util/route-util'
import Header from './users/header'
import AuthForm from './auth/auth-form'
import UserIndex from './users/user-index'

const App = () => (
  <main>
    <Header />
    <AuthRoute exact path="/login" component={AuthForm} />
    <AuthRoute exact path="/signup" component={AuthForm} />
    <ProtectedRoute exact path="/users" component={UserIndex} />
  </main>
)

export default App
