import React from 'react'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";

const Profile = () => {
  return (
    <>
      {/* <ul className='flex items-center gap-3'>
        <li className='w-[38px] h-[38px]'>
          <img src="/profile.jpg" alt="" className='w-full h-full object-contain rounded-full' />
        </li>
        <li className='text-secondary flex flex-col items-center text-sm'>
          <span className='font-semibold'>
            Leo Messi
          </span>
          <span className='text-xs text-gray-400 font-normal'>
          Admin
          </span>
        </li>
      </ul> */}

      <Menu placement='bottom-end'>
        <MenuHandler>
          <div className='flex items-center gap-2'>
            <Avatar
              variant="circular"
              alt="tania andrew"
              className="cursor-pointer"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ul className='cursor-pointer'>
              <li className='text-secondary text-sm font-bold'>Leo messi</li>
              <li className='text-xs text-gray-400 font-normal'>Admin</li>
            </ul>
          </div>
        </MenuHandler>
        <MenuList className='px-0 rounded-2xl shadow-md'>
          <MenuItem className='px-7'>
            <Typography variant="small" className="font-medium font-custom flex items-center gap-2 text-buttonBg">
              <AiOutlineLogin />
              Log in
            </Typography>
          </MenuItem>
          <hr className="my-2 border-blue-gray-50" />
          <MenuItem className='px-7'>
            <Typography variant="small" className="font-medium font-custom flex items-center gap-2 text-deleteBg">
              <AiOutlineLogout />
              Log Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

export default Profile
