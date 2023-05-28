import useCurrentUser from "@/hooks/useCurrentUser"
import { NextPageContext, InferGetServerSidePropsType } from "next"
import {signOut , getSession} from "next-auth/react"
import Navbar from "@/components/Navbar"
import BillBoard from "@/components/BillBoard"
import MoviesList from "@/components/MoviesList"
import useMoviesList from "@/hooks/useMoviesList"
export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {data:user} = useCurrentUser()
  const {data:movies=[]} = useMoviesList()
  // console.log(user)
  return (
    <>
      <Navbar/>
      <BillBoard />
      <div className="pb-40">
      <MoviesList title="Trending now" data={movies}/>
      </div>
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
