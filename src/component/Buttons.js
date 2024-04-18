import React from 'react'

const Buttons = ({name}) => {
  return (
    <div>
      <button className='flex border border-solid bg-gray-200  text-white-500 p-2 m-2 rounded-lg'>{name}</button>
    </div>
  )
}

export default Buttons