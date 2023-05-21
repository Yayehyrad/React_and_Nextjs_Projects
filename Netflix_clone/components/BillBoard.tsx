import useBillboard from "@/hooks/useBillboard"
import {AiOutlineInfoCircle} from "react-icons/ai"
const BillBoard = () => {
    const {data:movie} = useBillboard()
    console.log(movie)
  return (
    <div className=" relative h-[56.25vw]">
      <video className=" object-cover brightness-50" autoPlay  muted poster={movie?.thumbnailUrl} src={movie?.videoUrl}> </video>
      <div className=" absolute ml-4 md:ml-16 top-[30%] lg:top-[40%]">
           <p className="text-white font-bold text-1xl md:text-5xl h-full w-[50%] drop-shadow-xl">
            {movie?.title}
           </p>
           <p className="text-white mt-3 text-[8px] md:text-lg md:mt-8 drop-shadow-xl w-[90%] md:w-[80%] lg:w-[50%]">
            {movie?.description}
           </p>
           <div className="flex flex-row items-center mt-4 gap-3">
                <button className="text-white bg-white bg-opacity-40 px-1 py-2 rounded-md drop-shadow-xl hover:bg-opacity-20 transition flex flex-row items-center  ">
                    <AiOutlineInfoCircle  className="mr-1"/>
                    More Info
                </button>
           </div>
      </div>
    </div>
  )
}

export default BillBoard
