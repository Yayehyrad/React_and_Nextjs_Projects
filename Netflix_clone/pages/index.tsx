import useCurrentUser from "@/hooks/useCurrentUser"
import { NextPageContext } from "next"
import {signOut , getSession} from "next-auth/react"
import Navbar from "@/components/Navbar"
import BillBoard from "@/components/BillBoard"
export default function Home() {
  const {data:user} = useCurrentUser()
  // console.log(user)
  return (
    <>
      <Navbar/>
      <BillBoard />
    </>
  )
}
export async function getServerSideProps(context:NextPageContext){
  const session = await getSession(context)
  if(!session){
    return{
      redirect : {
        destination:'/auth'
        ,
        permanent: false
      }
    }
  }
  return {
    props:{}
  }
}
