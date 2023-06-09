import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
import {compare} from "bcrypt"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"



export default NextAuth({
    providers:[
        GithubProvider({
            clientId : process.env.GITHUB_ID || "",
            clientSecret : process.env.GITHUB_SECRET || ""
        }),
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID || "",
            clientSecret : process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        Credentials({
            id : "Credentials",
            name : "Credentials",
            credentials:{
                email:{
                    label : "email" ,
                    type : "text"
                },
                password:{
                    label : "password",
                    type : "password"
                }
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    throw new Error("email and password required"); 
                }
            const user = await prismadb.user.findUnique({
                where : {
                    email : credentials.email
                }
                
            })
            if(!user || !user.hashPassword){
                throw new Error("Email doesnt exist");      
            }
            const isCorrectPassword = await compare(credentials.password , user.hashPassword)
            console.log(user.hashPassword , isCorrectPassword)  
            if(!isCorrectPassword){
               
                throw new Error("Incorrect email or Password ");
                
            }
           
            return user
            }
        })
    ],
    pages : {
        signIn :"/auth"
    },
    debug : process.env.NODE_ENV === "development"
    ,
    session : {
        strategy:"jwt"
    },
    jwt:{
        secret : process.env.NEXTAUTH_JWT_SECRET
    },
    secret : process.env.NEXTAUTH_SECRET
    
})