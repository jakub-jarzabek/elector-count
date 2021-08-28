import React, { useState } from 'react'

import styles from '../styles/Message.module.scss'

export default function Message({ content, align, bgcolor }) {
  return (
    <div
      className={styles.MessageWrapper}
      style={{ marginLeft: align, backgroundColor: bgcolor }}
    >
      <p>{content}</p>
    </div>
  )
}
