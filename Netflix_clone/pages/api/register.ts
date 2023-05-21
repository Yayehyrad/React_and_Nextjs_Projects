import bcrypt from "bcrypt";
import { NextApiRequest , NextApiResponse } from "next";
import prismadb from "@/lib/prismadb"


export default async function name(req:NextApiRequest , res:NextApiResponse ) {
    if(req.method !== "POST"){
        return res.status(405).end()
    }
    try {
       
        const {email , password ,user} = req.body
       
        const existing = await prismadb.user.findUnique({
            where:{
                email,
            }
        })
        if(existing){
            return res.status(422).json({error:"taken"})
        }
        
        const hashpassword = await bcrypt.hash(password , 12)
         
        const muser = await prismadb.user.create({
            data:{
                email ,
                name:user,
                hashPassword : hashpassword,
                image:"",
                emailVerified : new Date()
            }
        })
        
        return res.status(200).json({x:"new"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({error})
    }
}