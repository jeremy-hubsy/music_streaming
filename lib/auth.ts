import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from './prisma'
import {User} from '../pages/api/me'

type Handler = {
    req: NextApiRequest, res: NextApiResponse, user: User
}

export const validateRoute = (handler: Handler) => {
    return async(req: NextApiRequest, res: NextApiResponse) => {
        const {TRAX_ACCESS_TOKEN: token} = req.cookies

        if(token){
            let user 
            try{
                const {id} = jwt.verify(token, 'hello')
                user = await prisma.user.findUnique({
                    where: {id}
                })
                if(!user){
                    throw new Error('not valid user')
                }
            }catch (error){
                res.status(401)
                res.json({error: 'Not Authorized'})
                return
            }
            return handler(req, res, user )
        }
        res.status(401)
        res.json({error: 'Not Authorized'})
    }
}
