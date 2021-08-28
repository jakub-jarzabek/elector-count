import Phone from '../components/Phone'
import React, { useEffect, useState } from 'react'
import Message from '../components/Message'
import styles from '../styles/Messages.module.scss'
import { getSession } from 'next-auth/client'
import axios from 'axios'
import Header from '../components/Header'
const Messages = ({ messages, session }) => {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     axios.get('/api/messages').then((response) => {
  //       if (response.data !== messagesState) {
  //         setMessagesState(response.data)
  //       }
  //     })
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [])
  const [messagesState, setMessagesState] = useState(messages)
  const messagesToRender = messagesState.map((message) => {
    /* prettier-ignore */
    if(message.author!==session.user.email){
     var margin = '75px'
     var bgcolor= 'rgba(255, 255, 255, 0.4)'
   }

    return (
      <Message
        key={message._id}
        content={message.content}
        date={message.date}
        author={message.author}
        align={margin}
        bgcolor={bgcolor}
      />
    )
  })

  const [message, setMessage] = useState()
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      author: session.user.email,
      content: message,
      date: new Date(),
    }
    axios.post('/api/messages', data).then((response) => {
      if (response) {
        setMessagesState((prevState) => [
          {
            author: data.author,
            content: data.content,
            date: data.content,
            _id: response.data,
          },
          ...prevState,
        ])
      }
    })
    setMessage('')
  }
  const deleteAllMessages = () => {
    axios.post('/api/wipe').then((response) => {
      if (response) {
        setMessagesState([])
      }
    })
  }
  return (
    <div className="CenterDiv">
      <Header />
      <Phone>
        <div className={styles.MessagesWrapper}>{messagesToRender}</div>
        <div className={styles.UserControl}>
          <form onSubmit={handleSubmit}>
            <textarea onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Send</button>
          </form>
          <button onClick={deleteAllMessages} className={styles.Delete}>
            wipe
          </button>
        </div>
      </Phone>
    </div>
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
