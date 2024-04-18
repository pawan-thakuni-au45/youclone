import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import Cart from './Cart'

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
    console.log('f',movies);

  
  return (
    <div className='flex flex-wrap'>
      {
        movies.map((info)=>(
            <Cart key={info.id} videoData={info}/>
        ))
      }
      
    </div>
  )
}

export default VideoContainer