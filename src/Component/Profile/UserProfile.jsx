import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { margin } from '@mui/system';
import { Button } from '@mui/material';
const UserProfile = () => {

  const handleLogOut=()=>{

  }
  return (
    <div className='min-h-[80vh] flex flex-col 
    justify-center items-center text-center'>

      <div className='flex flex-col items-center justify-center'>
        <AccountCircleIcon sx={{fontSize:"9rem"}}/>
        <h1 className='py-5 text-2xl font-semibold'>Rudra Tiwari </h1>
        <p>Email: rt1766285@gmail.com</p>
        
        <Button variant='contained' onClick={handleLogOut} sx={{margin:"2rem 0rem"}}>Logout</Button>
      </div>

    </div>
  )
}

export default UserProfile