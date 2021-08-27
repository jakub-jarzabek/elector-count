import Phone from '../components/Phone'
import React from 'react'
import Message from '../components/Message'
import styles from '../styles/Messages.module.scss'
import { getSession } from 'next-auth/client'
const Messages = ({ messages }) => {
  const messagesToRender = messages.map((message) => {
    ;<Message
      key={message._id}
      content={message.content}
      date={message.date}
      author={message.author}
    />
  })

  return (
    <Phone>
      <div className={styles.MessagesWrapper}>{messagesToRender}</div>
      <div className={styles.UserControl}>
        <textarea />
      </div>
    </Phone>
  )
}
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })

  const messages = await axios.get('/api/messages')

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { session, messages },
  }
}

export default Messages
