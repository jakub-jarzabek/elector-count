import React from 'react'

import styles from '../styles/Message.module.scss'

export default function Message({ content }) {
  return (
    <div className={styles.MessageWrapper}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        eleifend ligula orci, non finibus quam vehicula vel. Donec vestibulum
        ipsum eget tellus mattis feugiat
      </p>
    </div>
  )
}
