import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/store'
import Root from './components/root.js'
import * as API from './actions/session'

document.addEventListener('DOMContentLoaded', () => {
  let store

  if (window.currentUser !== undefined) {
    const { id } = window.currentUser

    store = createStore({
      session: { userId: id },
      users: { [id]: window.currentUser }
    })

    delete window.currentUser
  } else {
    store = createStore({})
  }

  window.store = store
  window.API = API

  const root = document.querySelector('#root')
  ReactDOM.render(<Root store={store} />, root)
})
