import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import FavButton from './FavButtno'
interface MovieCardProps {
    data : Record<string , any>
}
const MovieCard:React.FC<MovieCardProps> = ({data}) => {
  return (
    <div className='group bg-zinc-900 col-span-1 relative h-[12vw]'>
        <img src={data.thumbnailUrl} alt="thumbnail" className=' cursor-pointer transition duration-0 object-cover shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-100 h-[12vw]'/>
        <div className=" opacity-0 absolute top-0 transition delay-100 duration-200 z-10 invisible sm:visible w-full 
        scale-0 group-hover:scale-110 group-hover:-translate-y-[10vw] group-hover:opacity-100 group-hover:translate-x-[2vw]">
        <img src={data.thumbnailUrl} alt="thumbnail" className=' cursor-pointer  transition duration-0 object-cover shadow-xl rounded-t-md  h-[12vw]'/>
        <div className='z-10 bg-zinc-700 rounded-b-md p-2 lg:p-4 absolute shadow-md transition w-full'>
            <div className="flex flex-row items-center gap-3">
                <div className="flex justify-center rounded-full bg-gray-800 items-center transition w-6 h-6 lg:w-10 lg:h-10 hover:bg-gray-500 cursor-pointer">
                    <BsFillPlayFill size={20}/>
                </div>
                <FavButton movieId={data?.id}/>
            </div>
            <p className="text-green-400 font-semibold mt-4">
                New <span className='text-white'>2023</span>
            </p>
            <div className="felx flex-row mt-4 gap-2 items-center">
                <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
            </div>
            <div className="felx flex-row mt-4 gap-2 items-center">
                <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
            </div>

        </div>
        </div>
    </div>
  )
}

export default MovieCard
