import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const isMenuOpen=useSelector((store)=>store.app.isMenu)

  if(!isMenuOpen) return null
  return (
    <div className='shadow-lg w-40'>

    <ul>
      <li><Link to='/'>Home</Link></li>
      <li>Shorts</li>
      <li>Trending</li>
      <li>Shopping</li>

    </ul>
    <h1 className='font-bold mt-5'>Subscription</h1>
    <ul>
      <li>NDTV</li>
      <li>India Today</li>
      <li>Uttarakhand</li>
      <li>SimpleLearn</li>

    </ul>
    <h1 className='font-bold mt-5'>You</h1>
    <ul>
    <li>NDTV</li>
    <li>India Today</li>
    <li>Uttarakhand</li>
    <li>SimpleLearn</li>

  </ul>
    
    
    </div>
  )
}

export default Sidebar