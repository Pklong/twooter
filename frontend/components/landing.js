import React from 'react'
import { Login, Signup } from './auth/auth-form'

const Splash = () => (
  <ul>
    <li>Follow your interests.</li>
    <li>Hear what people are talking about.</li>
    <li>Join the conversation.</li>
  </ul>
)

const Welcome = () => (
  <section className="landing-container__welcome">
    <img className="logo__small" src="http://lorempixel.com/60/60" />
    <h1>See what's happening in the world right now</h1>
    <h2>Join Twooter today.</h2>
    <Signup />
  </section>
)

const Landing = () => {
  return (
    <article className="landing-container">
      <section className="landing-container__left">
        <Splash />
      </section>
      <section className="landing-container__right">
        <Login />
        <Welcome />
      </section>
    </article>
  )
}

export default Landing
