import React from 'react'

import styles from '../styles/Message.module.scss'

export default function Message({ content }) {
  return (
    <div className={styles.MessageWrapper}>
      <p>{content}</p>
    </div>
  )
}
