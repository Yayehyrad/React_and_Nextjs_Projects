import React from 'react'
interface MoblieMenuProps {
    visible ?: Boolean
}
const MobileMenu:React.FC<MoblieMenuProps> = ({
    visible  
}) => {

    if(!visible){
        return null
    }
        return (
                    <div className='flex flex-col w-56 absolute top-8 left-0 py-5 border-2 border-gray-800'>
                        <div className="flex flex-col gap-4">
                            <div className='px-3 text-center text-white hover:border-white hover:border-2 '>
                                Home
                            </div>
                            <div className='px-3 text-center text-white hover:border-white hover:border-2 '>
                            Series
                            </div>
                            <div className='px-3 text-center text-white hover:border-white hover:border-2 '>
                            Films
                            </div>
                            <div className='px-3 text-center text-white hover:border-white hover:border-2 '>
                            New & Popular
                            </div>
                            <div className='px-3 text-center text-white hover:border-white hover:border-2 '>
                            My List
                            </div>
                            <div className='px-3 text-center text-white hover:border-white hover:border-2 '>
                            Browse by language                           
                             </div>
                        </div>
                    </div>
                )
}

export default MobileMenu
