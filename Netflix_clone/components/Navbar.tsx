import NavBarItem from "./NavBarItem"
import {BsChevronDown , BsSearch , BsBell}  from "react-icons/bs"
import MobileMenu from "./MobileMenu"
import AccountMenu from "./AccuntMenu"
import { useCallback, useEffect, useState } from "react"

const Off_Set = 66
const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false)


    useEffect(() => {
        
    const handleScroll = ()=>{
        if(window.screenY >= Off_Set){
            setShowBackground(true)
        }else{
            setShowBackground(false)
        }}
        window.addEventListener("scroll" , handleScroll);
        return ()=>{
        window.removeEventListener("scroll" , handleScroll);  
        }
       
    }, [ ])
    


    const swithMobileMenu = useCallback(()=>{
        setShowMobileMenu((current) => !current)
    },[]) 
    const swithAccountMenu = useCallback(()=>{
        setShowAccountMenu((current) => !current)
    },[]) 
  return (
    <nav className=" w-full fixed z-40">
        <div className={`flex flex-row  items-center px-4 md:px-6 py-4  transition duration-500 ${showBackground ? 'bg-zinc-900 opacity-90' : "" } `} >
            <img src="/images/logo.png" alt="" className=" h-4 md:h-7"/>
        
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
            <NavBarItem label="Home"/>
            <NavBarItem label="Series"/>
            <NavBarItem label="Films"/>
            <NavBarItem label="New & Popular"/>
            <NavBarItem label="My List"/>
            <NavBarItem label="Browse by language"/>
        </div>
        <div className=" lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative" onClick={swithMobileMenu}>
            <p className=" text-gray-200 hover:text-white text-md">Browse</p>
            <BsChevronDown className={` text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'} duration-300`} />
            <MobileMenu visible={showMobileMenu}/>
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center" >
            <div className=" text-gray-200 hover:text-white cursor-pointer transition">
                <BsSearch />
            </div>
            <div className=" text-gray-200 hover:text-white cursor-pointer transition">
                <BsBell />
            </div>
            <div className="flex flex-row gap-2 items-center cursor-pointer relative">
                    <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden" onClick={swithAccountMenu}>
                        <img src="/images/download.jpg" alt="" />
                    </div>
                    <AccountMenu visible={showAccountMenu}/>
            </div>
        </div>
        </div>
     </nav>
  )
}

export default Navbar
