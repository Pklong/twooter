import React from 'react'
import { Login, Signup } from './auth/auth-form'

const Splash = () => (
  <ul>
    <li>Follow your interests.</li>
    <li>Hear what people are talking about.</li>
    <li>Join the conversation.</li>
  </ul>
)

const Welcome = () => [
  <img key="logo" src="" />,
  <h1 key="See">See what's happening in the world right now</h1>,
  <h2 key="join">Join Twooter today.</h2>
]

const Landing = () => {
  return (
    <article className="container">
      <section className="container__left">
        <Splash />
      </section>
      <section className="container__right">
        <Login />
        <Welcome />
        <Signup />
      </section>
    </article>
  )
}

export default Landing
