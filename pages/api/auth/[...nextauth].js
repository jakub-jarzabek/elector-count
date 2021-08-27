import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { MongoClient } from 'mongodb'

export default NextAuth({
  // Jwt configaration
  session: {
    jwt: true,
  },
  // Provider configaration
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        console.log('authorize')
        const client = await MongoClient.connect(process.env.DB_CONNECTION, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        const users = await client.db().collection('users')
        const result = await users.findOne({
          email: credentials.email,
        })
        console.log(await result)
        if (!result) {
          client.close()
          throw new Error('No user with the email')
        }
        if (credentials.password !== result.password) {
          client.close()
          throw new Error('Password doesnt match')
        }
        client.close()
        return { email: result.email }
      },
    }),
  ],
  // pages: { signIn: '../../login.js' },
})
