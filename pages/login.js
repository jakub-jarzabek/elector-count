import React, { useRef, useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/client'
import Phone from '../components/Phone'
import router from 'next/router'
import styles from '../styles/Login.module.scss'
import Header from '../components/Header'

export default function Login() {
  const [session, loading] = useSession()
  const [display, setDisplay] = useState('none')
  useEffect(() => {
    if (session) {
      router.replace('/messages')
    }
  }, [session])

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  async function handleSubmit(event) {
    event.preventDefault()
    setDisplay('flex')
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    const result = await signIn('credentials', {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    })
    console.log(result)
    if (!result.error) {
      router.replace('/messages')
      setDisplay('none')
    }
  }
  return (
    <div className="CenterDiv">
      <Header />
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
        <div className="double-up container" style={{ display }} />
      </Phone>
    </div>
  )
}
