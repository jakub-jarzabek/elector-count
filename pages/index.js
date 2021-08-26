import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

import Phone from '../components/Phone'

export default function Home() {
  const [session, loading] = useSession()
  return (
    <>
      {!session && (
        <>
          <Phone>
            <button onClick={signIn} className={styles.SignInBtn}>
              Sign In
            </button>
          </Phone>
        </>
      )}
      {session && <Phone />}
    </>
  )
}
