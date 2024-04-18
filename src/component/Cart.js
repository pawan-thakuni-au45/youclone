import React from 'react'

const Cart = ({videoData}) => {
    console.log('c',videoData);
    const {snippet,statistics}= videoData;
    const{channelTitle,title,thumbnails}=snippet;
    const {viewCount}=statistics
  return (
    <div className='p-2 m-3 w-72 shadow-xl '>
      <img className='rounded-lg' alt='thumb' src={thumbnails.medium.url}/>
         <ul>
         <li className='font-bold'>{title}</li>
         <li>{channelTitle}</li>
         <li>{viewCount}</li>

         </ul>
    </div>
  )
}

export default Cart