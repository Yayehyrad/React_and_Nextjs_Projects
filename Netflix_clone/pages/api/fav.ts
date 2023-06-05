import { NextApiRequest , NextApiResponse } from "next";
import { without } from "lodash";
import prismadb from '@/lib/prismadb'
import serverAuth from "@/lib/serverAuth";


export default async function handler(req:NextApiRequest , res:NextApiResponse){
        try{
           
            if(req.method === "POST"){
                const {currentUser} = await serverAuth(req);
                console.log(currentUser)
                const {movieId} = req.body
                const existingMovie = await prismadb.movie.findUnique({
                    where:{
                        id : movieId
                    }
                })
                if (!existingMovie) {
                    throw new Error('invaid id')
                }
                const user = await prismadb.user.update({
                    where:{
                        email:currentUser.email || ''
                    },
                    data :{
                        favorites :{
                            push:movieId
                        }
                    }

                })
                return res.status(200).json(user)
            }
            if(req.method === 'DELETE'){
                const {currentUser} = await serverAuth(req);
                const {movieId} = req.body
                const existingMovie = await prismadb.movie.findUnique({
                    where:{
                        id : movieId
                    }
                })
                if (!existingMovie) {
                    throw new Error('invaid id')
                }
                const updatedFavIds = without(currentUser.favorites , movieId)
                const user = await prismadb.user.update({
                    where:{
                        email:currentUser.email || ''
                    },
                    data :{
                        favorites : updatedFavIds
                    }

                })
                return res.status(200).json(user)
            }
            return res.status(405).end()
        }catch(e){
            console.log(e)
            res.status(500).end()
        }
}