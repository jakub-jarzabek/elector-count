import React from 'react'

import styles from '../styles/Phone.module.scss'

export default function Phone(props) {
  return (
    <div className={styles.PhoneCase}>
      <div className={styles.PhoneScreen}>{props.children}</div>
      <div className={styles.PhoneNotch}>
        <div className={styles.Speaker} />
        <div className={styles.Camera} />
      </div>
    </div>
  )
}
