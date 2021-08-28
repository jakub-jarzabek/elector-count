import React from 'react'
import { signOut } from 'next-auth/client'
import styles from '../styles/Logout.module.scss'
export default function Logout() {
  return (
    <button className={styles.LogoutBtn} onClick={() => signOut()}>
      X
    </button>
  )
}
