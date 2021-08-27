import Phone from '../components/Phone'
import React, { useEffect } from 'react'
import Message from '../components/Message'
import styles from '../styles/Messages.module.scss'
import { getSession } from 'next-auth/client'
import axios from 'axios'
const Messages = ({ messages }) => {
  useEffect(() => {
    console.log(messages)
  }, [])
  const messagesToRender = messages.map((message) => {
    /* prettier-ignore */
    return(
    <Message
      key={message._id}
      content={message.content}
      date={message.date}
      author={message.author}
    />
    )
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

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  const response = await axios.get(`${process.env.BASE_URL}/api/messages`)
  const messages = response.data
  console.log(messages)
  return {
    props: { session, messages },
  }
}

export default Messages
