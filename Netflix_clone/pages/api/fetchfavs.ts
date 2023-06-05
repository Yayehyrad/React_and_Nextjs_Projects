import { NextApiRequest , NextApiResponse } from "next";
import prismadb from '@/lib/prismadb'
import serverAuth from "@/lib/serverAuth";


export default async function hander(req:NextApiRequest , res : NextApiResponse){
     
        if(req.method !== "GET"){
            
            return res.status(405).end()
        }
        try {
            const {currentUser} = await serverAuth(req)
            const movies  = await prismadb.movie.findMany({
                where:
                {
                    id: {
                       in :  currentUser?.favorites
                    }
                }
            })
            return res.status(200).json(movies)
        } catch (error) {
            return res.status(400).end()
        }
    
}