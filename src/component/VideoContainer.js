import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'

const VideoContainer = () => {
     const [movies,setMovies]=useState([])

    useEffect(()=>{
           fetchMovies()
    },[])

    const fetchMovies=async()=>{
        const data=await fetch(YOUTUBE_API)
        const json=await data.json()
        console.log(json);
  setMovies(json.items)
    }
   

    if(movies?.length===0){
      return (
        <Shimmer/>
      )
    }
  
  return (
    <div className='flex flex-wrap'>
      {
        movies.map((info)=>(
           <Link key={info.id} to={'/watch?v='+info.id}><Cart  videoData={info}/></Link> 
        ))
      }
      
    </div>
  )
}

export default VideoContainer