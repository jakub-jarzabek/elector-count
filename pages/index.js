import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React from "react";
import Link from "next/link";


import Phone from '../components/Phone'

export default function Home() {
    const [session, loading] = useSession();
  return (

    <>
        {!session && (
            <>
                Not signed in
                <button onClick={signIn}>Sign In</button>
            </>
        )}
        {session && (
            <Phone />
        )}

    </>
  )
}
