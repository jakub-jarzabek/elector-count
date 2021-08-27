// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {methods} from '../../constants/methodEnum'
import {error} from "next/dist/build/output/log";
import { MongoClient } from 'mongodb'

export default async function handler(req, res) {

    const client = await MongoClient.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
   switch(req.method){
      case methods.GET:
          const messages = await client.db().collection('messages')
          res.send(await messages)
           break;
      case methods.POST:
          const {author, content, date} = req.body
          try{
              client.db.messages.insertOne({author, content, date

              })
          } catch (e){
              print(e)
          }
           break;
      default:
         throw new Error('Wrong method')
   }

}
