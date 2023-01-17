import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "../../lib/auth";


export type User = {
    id: number,
    createdAt: Date,
    updatedAt: Date,
    email: string,
    fristName: string,
    lastName: string,
    password: string

}

export default validateRoute(async (req, res, user) => {
    const playlistsCount = await prisma.playlist.count({
        where:{
            userId: user.id
        }
    })
    console.log(playlistsCount)
    res.json({...user,  playlistsCount })
})