import React, { useState } from 'react'

const Usememmo = () => {
    
    const[colorji,setColor]=useState(false)
    console.log(colorji);

   
  return (
    
    
    <div 
    className=
    {"border border-black h-60 w-60 " + 
    (colorji && 'bg-green-600')
}>
    
    
      
      <button className='bg-green-600' onClick={()=>setColor(!colorji)}>btn</button>
    
    </div>
   

   
    
  )
}

export default Usememmo