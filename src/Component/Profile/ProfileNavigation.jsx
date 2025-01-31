import React from 'react'

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Drawer } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { useNavigate } from 'react-router-dom';
const menu=[
  {title:"Orders",icon:<ShoppingBagIcon/>},
  {title:"Favorites",icon:<FavoriteIcon/>},
  {title:"Home",icon:<HomeIcon/>},
  {title:"Balance",icon:<AccountBalanceWalletIcon/>},
  {title:"Notification",icon:<NotificationsIcon/>},
  {title:"Events",icon:<EventIcon/>},
  {title:"Logout",icon:<LogoutIcon/>}
];
export const ProfileNavigation = ({open,handleClose}) => {

  const isSmallScreen = useMediaQuery('(max-width:900px)')
  
  const navigate = useNavigate()
  const handleNavigate=(item)=>{
         navigate(`/my-profile/${item.title.toLowerCase()}`)
  }

  return (
    <div>
      <Drawer 
      variant={isSmallScreen?"temporary" :"permanent"}
      onClose={handleClose}
      open={isSmallScreen?open:true} 
      anchor='left'
      sx={{zIndex:-1 ,position:'sticky'}}>

      <div className='w-[50vw] lg:w-[20vw] 
      h-[900vh] flex flex-col 
      justify-center text-xl 
      gap-8 pt-16'>

        {menu.map((item,i)=><>
        <div onClick ={()=>handleNavigate(item)} 
        className='px-5 
        flex items-center
        space-x-5 cursor-pointer'>
        {item.icon}
        <span>{item.title}</span>
        </div>
        {i!==menu.length-1 && <div className='border-b border-gray-300'></div>}
        </>
      )}

      </div>
      </Drawer>
    </div>
  )
}


export default ProfileNavigation