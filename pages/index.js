import styles from '../styles/Home.module.scss'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Phone from '../components/Phone'
import router from 'next/router'
import axios from 'axios'
import Header from '../components/Header'

export default function Home() {
  const [session, loading] = useSession()
  useEffect(() => {
    if (session) {
      router.replace('/messages')
    }
  }, [session])
  return (
    <>
      {!session && (
        <div className="CenterDiv">
          <Header />
          <Phone>
            <button
              onClick={() => router.replace('/login')}
              className={styles.SignInBtn}
            >
              Sign In
            </button>
          </Phone>
        </div>
      )}
    </>
  )
}
