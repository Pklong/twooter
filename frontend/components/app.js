import React from 'react'
import { Route } from 'react-router-dom'
import { ProtectedRoute, AuthRoute } from '../util/route-util'
import Landing from './landing'
import UserIndex from './users/user-index'
import TwootFeed from './twoots/twoot-feed'

const App = () => (
  <main>
    <AuthRoute exact path="/" if={TwootFeed} else={Landing} />
    <ProtectedRoute exact path="/users" component={UserIndex} />
  </main>
)

export default App
