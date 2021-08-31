import Phone from '../components/Phone'
import React, { useEffect, useState } from 'react'
import Message from '../components/Message'
import styles from '../styles/Messages.module.scss'
import { getSession } from 'next-auth/client'
import axios from 'axios'
import Header from '../components/Header'
import Logout from '../components/Logout'
import { io } from 'socket.io-client'
const Messages = ({ messages, session }) => {
  const [messagesState, setMessagesState] = useState(messages)
  useEffect(() => {
    axios.get('/api/messages').then((response) => {
      setMessagesState(response.data)
    })
    // Message Update
    io().on('message', (msg) => {
      console.log(msg)
      setMessagesState((prevState) => [
        {
          author: msg.author,
          content: msg.content,
          date: msg.content,
          // _id: response.data,
        },
        ...prevState,
      ])
    })
    // Message deletion
    io().on('wipe', () => {
      setMessagesState([])
    })
  }, [])
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
    if (message !== '') {
      const data = {
        author: session.user.email,
        content: message,
        date: new Date(),
      }

      axios.post('/api/messages', data).then((response) => {
        if (response) {
          io().emit('chatMsg', data)
        }
      })
      setMessage('')
    }
  }
  const deleteAllMessages = () => {
    axios.post('/api/wipe').then((response) => {
      if (response) {
        io().emit('wipeMessages')
      }
    })
  }
  return (
    <div className="CenterDiv">
      <Header />
      <Phone>
        <Logout />
        <div className={styles.MessagesWrapper}>{messagesToRender}</div>
        <div className={styles.UserControl}>
          <form onSubmit={handleSubmit}>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
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
