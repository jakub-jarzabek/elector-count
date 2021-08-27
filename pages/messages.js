import Phone from '../components/Phone'
import React from 'react'
import Message from '../components/Message'
import styles from '../styles/Messages.module.scss'
import { getSession } from 'next-auth/client'
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
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

export default Messages
