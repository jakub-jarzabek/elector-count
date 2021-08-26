import React from 'react'

import styles from '../styles/Phone.module.scss'

export default function Phone() {
  return (
    <div className={styles.PhoneCase}>
      <div className={styles.PhoneScreen}></div>
      <div className={styles.PhoneNotch}>
        <div className={styles.Speaker} />
        <div className={styles.Camera} />
      </div>
    </div>
  )
}
