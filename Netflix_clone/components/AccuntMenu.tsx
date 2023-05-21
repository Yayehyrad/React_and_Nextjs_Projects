import React from 'react'
import {signOut} from "next-auth/react" 
interface AccountMenuProps {
    visible?:Boolean
}

const AccountMenu : React.FC<AccountMenuProps> = ({
    visible
}) => {
    if(!visible){
        return null
    }
  return (
    <div className=" bg-black w-56 flex flex-col absolute top-14 right-0 py-5 border-2 border-gray-800">

       <div className="flex flex-col gap-2">
        <div className='px-3 w-full group/item flex flex-row gap-3 items-center '>
            <img className='w-8 runded-md' src="/images/download.jpg" alt="" />
            <p className=" text-white text-sm group-hover/item:underline">username</p>
        </div>
        <hr className='bg-gray-800 border-0 h-px my-4'/>
        <div onClick={()=>signOut()} className="text-white text-sm hover:underline px-3 text-center">Sign Out</div>
       </div>
    </div>
  )
}

export default AccountMenu
 