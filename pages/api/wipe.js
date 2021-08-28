import { methods } from '../../constants/methodEnum'

import { MongoClient } from 'mongodb'
export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  switch (req.method) {
    case methods.POST:
      try {
        client
          .db()
          .collection('messages')
          .deleteMany()
          .then(res.send('deleted'))
      } catch (err) {
        console.log(err)
      }
  }
}
