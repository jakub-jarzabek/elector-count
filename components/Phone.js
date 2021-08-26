import React from 'react'

import styles from '../styles/Phone.module.scss'

export default function Phone() {
  return (
    <div className={styles.PhoneWrapper}>
      <div className={styles.PhoneCase}>
        <div className={styles.PhoneScreen}></div>
      </div>
    </div>
  )
}
