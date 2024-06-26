import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {toggleMenu} from '../utils/appSlice'
import { Link } from 'react-router-dom'
import { YOUTUBE_SEARCH_API } from '../utils/constant'

const Header = () => {
  const[searchText,setSearchText]=useState("")
  const[suggestion,setSuggestion]=useState([])
  const[showSuggestion,setShowSuggestion]=useState(false)
  

useEffect(()=>{


  const timer=setTimeout(()=>getSearchResult(),200);

  return ()=>{
    clearTimeout(timer);
  }
 
  

},[searchText])
 

const getSearchResult = async ()=>{
    const data=await fetch(YOUTUBE_SEARCH_API + searchText)
    const json=await data.json()
   
    setSuggestion(json[1])

}
  const dispatch=useDispatch()

  const ontoggle=()=>{
    dispatch(toggleMenu())
  }

  
    return (
    <div className='grid grid-flow-col md:grid-flow-col  mt-5 my-10 shadow-lg '>
     <div className='flex col-span-3 md:col-span-1'>
     <img 
     onClick={()=>ontoggle()}
     className='h-10'alt="img" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAL0AyAMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAABwQGAQIDBf/EADcQAQABAgMFAwsDBAMAAAAAAAABAgMEBRcGEVWU0RIh0gcWMUFRUlRxkpPiIqKxExUyoWGBkf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8As4AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB84ADu9p3e0AO72nd7QA7vad3tADu9p3e0AO72n/QAAAAAAAAAAAAAAMfMsTOCy7FYqm3Vdqs2a7kW6fTVMUzO6PmitXlY2iqqmaIy+iN/+MWN/Z/476lyfNr2fyWuqaq8oy+ap75mcNRv/gEe1X2l97Acv+RqvtL72A5f8lg83cj4Nl/K0dDzdyPg2X8rR0FR/VfaX3sBy/5Gq+0vvYDl/wAlg83cj4Nl/K0dDzdyPg2X8rR0BH9V9pfewHL/AJGq+0vvYDl/yWDzdyPg2X8rR0PN3I+DZfytHQEf1X2l97Acv+RqvtL72A5f8lg83cj4Nl/K0dDzdyPg2X8rR0BH9V9pfewHL/k5p8q+0VNUTVGX1Rv39mbG7tf+VK/5u5HwbL+Vo6OaNn8loqiqjKMviqO+JjDUb/4BlZbiZxuXYXFVW6rVV6zRcm3V6aZmmJ3T8mQAgAAAAAAAAAAAAPDH4u3gMFfxd/f/AErFqq7Xujv3UxMz/CX1+WOrtz2Mip7Pq7WK793q3/pBVxJ9Y7nArfNT4TWO5wK3zU+EFYEn1jucCt81PhNY7nArfNT4QVgSfWO5wK3zU+E1jucCt81PhBWBJ9Y7nArfNT4TWO5wK3zU+EFYEn1jucCt81Phc0eWOrtR28ip7Pr7OK793r3fpBVx4YDF28fgrGLsb/6V+1Tdo3xundVETH8vcAAAAAAAAAAAAHWuim5RVRcpiqiqJiqmfRMT6YarX5N9k6qpq/tlVPfv7NOIuREfKN/c2wBqWmmynDrnM3Opppspw65zNzq20Falppspw65zNzqaabKcOuczc6ttAalppspw65zNzqaabKcOuczc6ttAalppspw65zNzqaabKcOuczc6ttAalppspw65zNzq5o8m2ydNUT/bJq3TE9mrEXJifnG9tgDrRRTbopot0xTRTERTTHoiI9EOwCAAAAAAAAAAAAOmIvW8NYuX79cUWrVE111z6IiImZ/00WrytbOxNXZsZjVTE/5xZp3T+5vOKsWsXhruGxFMV2r1E0V0z64mN0p7X5IMpmvfTmePpjf+mJi3VMR89wMjVrZ/4bMvs0+I1a2f+GzL7NPiYmj+U8Vx30W+ho/lPFcd9FvoKy9Wtn/hsy+zT4jVrZ/4bMvs0+JiaP5TxXHfRb6Gj+U8Vx30W+gMvVrZ/wCGzL7NPiNWtn/hsy+zT4mJo/lPFcd9FvoaP5TxXHfRb6Ay9Wtn/hsy+zT4jVrZ/wCGzL7NPiYmj+U8Vx30W+ho/lPFcd9FvoDL1a2f+GzL7NPic0+VnZ6ZjtWMxppmd3bmzTMR+5h6P5TxXHfRb6O9HkgyiK4mrM8fVET3xEW6ZmPnuBQ7F23iMPbv2K4rtXKIrorj0TExEx/p3eeFsWsJhrOGw9EUWrNEUUUx6oiN0PQQAAAAAAAAAAAAAAAFAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==" ></img>
    
      <Link to='/'><img className=' h-[40px] w-[40px] ml-6 md:h-10 md:w-52  ' alt="you" src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"></img></Link>
     </div>

     <div>
     <div className='flex justify-center col-span-7 md:col-span-10 '>
    <input className="h-10 ml-[200px] w-9 md:mx-66 border border-gray-500 pl-80 rounded-l-full " type="text" 
    value={searchText}
    onChange={(e)=>setSearchText(e.target.value)}
    onFocus={()=>setShowSuggestion(true)}
    onBlur={()=>setShowSuggestion(false)}
    />
    <button className='h-10 rounded-r-full border bg-gray-100 border-gray-500'>🔍</button>
    </div>
    </div>
    {
      showSuggestion && (
    <div className='fixed bg-white my-10 ml-[500px] px-2 w-[37rem] shadow-lg '>
      <ul>
      {suggestion.map((s)=>(
       <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>
      ))}
      </ul>
    </div>
      )
    }
    <div>
     <img  className="h-10 gcol-span-1" alt="log" src=" data:image/png;base64,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"></img>
    </div>
    </div>
  )
}

export default Header