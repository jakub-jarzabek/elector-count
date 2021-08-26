import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.Credentials({
            name: "Elector Count Provider",
            credentials: {
                username: {label: "Username", type: "text", placeholder:"Karl Franz"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials){
                const user = {name: "Karl Franz", username: "Karl Franz"}
                return user
            }
        })
    ],
    session: {
        jwt: true,

    },
    pages: {
        signIn: '../../login'
    }
}

    export default (req, res) => NextAuth(req, res, options);
