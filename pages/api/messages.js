// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { methods } from '../../constants/methodEnum'
import { MongoClient } from 'mongodb'

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  switch (req.method) {
    case methods.GET:
      const messages = await client
        .db()
        .collection('messages')
        .find({})
        .sort({ date: -1 })
        .toArray()
      res.send(messages)
      break

    case methods.POST:
      const { author, content, date } = req.body
      try {
        const userId = await client
          .db()
          .collection('messages')
          .insertOne({ author, content, date })
          .then((response) => response.insertedId)
        res.send(userId)
      } catch (err) {
        console.log(err)
      }
      break
    default:
      throw new Error('Wrong method')
  }
}
