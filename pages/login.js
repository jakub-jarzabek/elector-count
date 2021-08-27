import React, { useState, useRef } from 'react'
import { signIn } from 'next-auth/client'
import Phone from '../components/Phone'
import router, { useRouter } from 'next/router'
import styles from '../styles/Login.module.scss'

export default function Login() {
  async function handleSubmit(event) {
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    const result = await signIn('credentials', {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    })
    if (!result.error) {
      router.replace('/messages')
    }
  }
  return (
    <Phone>
      <form className={styles.LoginForm} onSubmit={handleSubmit}>
        <label htmlFor="loginInput">Email:</label>
        <input id="loginInput" type="text" required ref={emailInputRef} />
        <label htmlFor="passwordInput">Password:</label>
        <input
          id="passwordInput"
          type="password"
          ref={passwordInputRef}
          required
        />
        <button type="submit">Login</button>
      </form>
    </Phone>
  )
}
