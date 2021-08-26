import Phone from '../components/Phone'
import React, { SyntheticEvent, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Login.module.scss'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function submitForm() {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json())
    const token = res.token

    // if(token){
    //     await router.push('/')
    // }
  }

  return (
    <Phone>
      <form className={styles.LoginForm}>
        <label htmlFor="loginInput">Login:</label>
        <input
          id="loginInput"
          type="text"
          className="form-control"
          value={username}
          Required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="passwordInput">Password:</label>
        <input
          id="passwordInput"
          type="password"
          className="form-control"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          onClick={submitForm}
        >
          Login
        </button>
      </form>
    </Phone>
  )
}

export default Login
