import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'

const Favorites = () => {
  return (
    <div className='flex items-center flex-col justify-between'>
      <h1 className='text-xl font-semibold '>My Favorites</h1>
      <div className='flex flex-wrap justify-center items-center space-x-5'>
      {
      [1,1,1].map((item)=><RestaurantCard/>)
      }
      </div>
    
    </div>
  )
}

export default Favorites