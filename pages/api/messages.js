// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {methods} from '../../constants/methodEnum'
import {error} from "next/dist/build/output/log";

export default function handler(req, res) {
   switch(req.method){
      case methods.GET:
         res.send('GET')
           break;
      case methods.POST:
         res.send('POST')
           break;
      default:
         throw new Error('Wrong method')
   }

}
