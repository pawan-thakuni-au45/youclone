import React from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer';

const Watch = () => {
    const[getVideo]=useSearchParams()
    console.log(getVideo.get('v'));
  return (
    <div>
    <div>
    <iframe width="1200" 
    height="500" 
    src={"https://www.youtube.com/embed/"+getVideo.get('v')} 
    title="YouTube video player" frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    <div className='font-bold my-7'>
    <CommentContainer/>
    </div>
    </div>
  )
}

export default Watch