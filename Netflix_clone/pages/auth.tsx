import Image from "next/image"
import CInput from "../components/CInput"
import { useCallback, useState } from "react"
import axios from "axios"
import {signIn} from "next-auth/react"

import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"

const Auth = () => {
  const [email, setEmail] = useState("")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [toggle , setToggle] = useState("login")

  const toggleReg_Log = useCallback(()=>{
    setToggle(current => current == "login"? "register" : "login")
  },[])
  const login = useCallback(async()=>{
    try {
     await signIn("Credentials" ,{
      email, 
      password,
      callbackUrl:"/profile"
     })
  
    } catch (error) {
      console.log(error)
    }
} , [email , password ])

  const register = useCallback(async()=>{
      try {
        await axios.post("/api/register" , {
          email,
          password,
          user
        })
        login()
      } catch (error) {
        console.log(error)
      }
  },[email , password , user , login])
 
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className=" px-10 py-10">
            <Image src="/images/logo.png" alt="Logo" width={300} height={300} className=""/>
        </nav>
        <div className="flex justify-center">
             <div className="bg-black opacity-70 px-16 self-center py-16 mt-2 rounded-md lg:w-2/5 lg:max-w-md w-full">
                <h2 className="text-white text-4xl mb-8 font-semibold "> 
                  {toggle == "login" ? "Signin" : "Register"}
                </h2>
                <div className="flex flex-col gap-5">
                {toggle == "register" && 
                <CInput 
                  id="user"
                  label="User Name"
                  onChange = {(e:any)=>{setUser(e.target.value)}}
                  value={user}
                  type="text"                
                />}
                <CInput 
                  id="email"
                  label="email"
                  onChange = {(e:any)=>{setEmail(e.target.value)}}
                  value={email}
                  type="email"                
                />
                  <CInput 
                  id="password"
                  label="password"
                  onChange = {(e:any)=>{setPassword(e.target.value)}}
                  value={password}
                  type="password"                
                />

             </div>
               <button onClick={toggle == "login" ? login : register} className="bg-red-500 text-white w-full mt-5 rounded-md py-2 hover:bg-red-600 transition">
               {toggle == "login"? "Login" :"Register"}</button>
               <div className="flex flex-row items-center justify-center gap-4 mt-8">
                  <div className="w-10 h-10 bg-white flex rounded-full  justify-center items-center cursor-pointer hover:opacity-70">
                    <FcGoogle size={30} />
                  </div>
                    <div className="w-10 h-10 bg-white flex rounded-full  justify-center items-center cursor-pointer hover:opacity-70">
                    <FaGithub size={30} />
                  </div>


               </div>
               <p className=" text-gray-400 mt-12"> {toggle == "login" ?"First time using NF":"Alredy have an account"} 
               <span onClick={toggleReg_Log} className="text-white cursor-pointer hover:underline ml-1">
                {toggle == "login" ? "Create an account":"Signin"}</span></p>
             </div>
             
        </div>
      </div>
    </div>
  )
}

export default Auth
