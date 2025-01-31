import { IconButton } from '@mui/material';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import "./Navbar.css"
import { Box } from '@mui/system';


export const Navbar = () => {
  return (
    <Box sx={{zIndex:100}} 
    className='px-5 sticky top-0 z-50 py-[.8rem] 
    bg-[#e91963] lg:px-20 flex
    justify-between'>

       
              <div className='lg:mr-10 cursor-pointer flex items-center
              space-x-2'>
                <li className='logo font-semibold text-gray-300 text-2xl'>
                     Food delivery App
                </li>
              </div>

            
             <div className='flex items-center space-x-2 lg:space-x-10'>

               <div className=''>

                <IconButton>
                        <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>

            </div>

            <div className=''>
     <Avatar sx={{bgcolor:"white",color: "pink.A400"}}>
                    R  
                 </Avatar>
            </div>
            <div className=''>
              <Badge color="primary" badgeContent={3}>
                <ShoppingCartIcon></ShoppingCartIcon>
            </Badge>
            </div>
            </div>
            </Box>   
     
  );
};
