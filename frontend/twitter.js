import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as API from './util/user-api'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root')
  window.API = API
  ReactDOM.render(<h1>HI</h1>, root)
})
