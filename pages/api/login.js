import {NextApiRequest, NextApiResponse} from "next";
import jwt from 'jsonwebtoken';

const KEY = 'drthdrthdthdthdthdhdsfsd'

export default function (NextApiRequest,NextApiResponse) {
    if(!NextApiRequest.body) {
        NextApiResponse.statusCode = 404
        NextApiResponse.end('Error')
        return
    }
    const {username, password} = NextApiRequest.body

    NextApiResponse.json({
        token: jwt.sign({
            username
        }, KEY)
    })

}
