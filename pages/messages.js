import Phone from '../components/Phone'
import React from 'react'
import Message from '../components/Message'
import styles from '../styles/Messages.module.scss'
const Messages = () => {
  return (
    <Phone>
      <div className={styles.MessagesWrapper}>
        <Message />
      </div>
      <div className={styles.UserControl}>
        <textarea />
      </div>
    </Phone>
  )
}

export default Messages
