import { Modal } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {style} from '../Cart/Cart'
import LoginForm from './LoginForm';
import Box from '@mui/material/Box';
import Register from './Register'

const Auth = () => {
  const location = useLocation();
  const naviagte = useNavigate();
  const handleOnClose=()=>{
    naviagte("/")
  }
  return (
    <>
    <Modal onClose={handleOnClose} open={
      location.pathname==="/account/register"
      || location.pathname==="/account/login"
     

    }>
       <Box sx={style}>
          {location.pathname==="/account/register"?<Register/>:<LoginForm/>}
       </Box>
    </Modal>
    </>
  )
}

export default Auth