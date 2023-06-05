import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavs from "@/hooks/useFavs";
import React, { useCallback, useMemo } from "react";
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlinePlus , AiOutlineCheck} from "react-icons/ai";

interface FavButtonProps{
    movieId:string
}

const FavButton:React.FC<FavButtonProps> = ({movieId})=>{
    const {mutate : mutateFavs} =  useFavs()
    const {data : currentUser , mutate} =  useCurrentUser()
    const isFav = useMemo(()=>{
        const list = currentUser?.favorites || []
        return list.includes(movieId)
    },[currentUser , movieId])
    const togglefavs = useCallback(async()=>{
        let response;
        if(isFav){
            response = await axios.delete('/api/fav' , {data : movieId})
        }else {
            response = await axios.post('/api/fav' , {movieId})
        }
        const updatefavs = response?.data?.favorites;
        mutate({
            ...currentUser,
            favorites : updatefavs
        })
        mutateFavs()
    }, [currentUser, isFav, movieId, mutate, mutateFavs])
    const Icon = isFav?AiOutlineCheck:AiOutlinePlus ;
    return (
        <div className=" cursor-pointer w-6 h-6 lg:w-10 lg:h-10 flex justify-center items-center rounded-full border-2 border-white group/items transition-all
        hover:border-gray-400 hover:bg-slate-700" onClick={togglefavs}>
        <Icon className=" font-bold "  size={25}/>
        </div>
    )
}

export default FavButton