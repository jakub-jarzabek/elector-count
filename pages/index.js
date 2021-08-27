import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import Phone from '../components/Phone'
import router, { useRouter } from 'next/router'
import axios from 'axios'

export default function Home() {
  const [session, loading] = useSession()
  useEffect(() => {
    if (session) {
      router.replace('/messages')
      axios.get('/api/messages').then((response) => console.log(response.data))
    }
  }, [session])
  return (
    <>
      {!session && (
        <>
          <Phone>
            <button
              onClick={() => router.replace('/login')}
              className={styles.SignInBtn}
            >
              Sign In
            </button>
          </Phone>
        </>
      )}
    </>
  )
}
