import React from 'react'
import { Card } from '@mui/material'
import Button from '@mui/material/Button'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
     <div className='flex items-center space-x-5'>
        <img className='h-16 w-16' src='https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg'
          alt='product'  />
          <div>
            <p>Biryani</p>
            <p>$399</p>
          </div>
        
    </div> 
    <div>
        <Button variant='contained' className='flex cursor-not-allowed' >Completed</Button>
    </div>
    
        
    </Card>
  )
}

export default OrderCard