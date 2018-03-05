import React from 'react'
import { Route } from 'react-router-dom'
import { ProtectedRoute, AuthRoute } from '../util/route-util'
import Landing from './landing'
import UserIndex from './users/user-index'

const App = () => (
  <main>
    <AuthRoute exact path="/" component={Landing} />
    <ProtectedRoute exact path="/users" component={UserIndex} />
  </main>
)

export default App
