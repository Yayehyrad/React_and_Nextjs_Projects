 import { NextPageContext } from "next/types"
 import {getSession} from "next-auth/react"
import useCurrentUser from "@/hooks/useCurrentUser"
import { useRouter } from "next/router"

 const Profile = () => {
    const {data : user} = useCurrentUser() 
    const router = useRouter()
  return (
    <div className=' flex items-center justify-center h-full '>
      <div className="flex flex-col">
        <h1 className=" text-white text-3x
         md:text-6xl text center">Who's Watching</h1>
         <div className="flex items-center justify-center mt-8 gap-8">
          <div onClick={()=>{router.push('/')}}>
            <div className=" group flex-row w-44 mx-auto">
                <div className=" w-44 h-44 flex items-center justify-center rounded-md border-2 
                border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                    <img src="/images/download.jpg" alt="" />
                   
                </div>
                <div className="mt-4 text-center text-gray-400 group-hover:text-white text-2xl" >
                    {user?.name}
                    </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: NextPageContext){
    const session = await getSession(context)
    if(!session){
        return {
            redirect : {
                destination:'/auth',
                parameter:false
            }
        }
        
    }
    return {
        props:{}
    }

}

export default Profile
