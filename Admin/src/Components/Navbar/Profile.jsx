import React from 'react'

const Profile = () => {
  return (
    <>
      <ul className='flex items-center gap-3'>
        <li className='w-[40px] h-[40px]'>
          <img src="/profile.jpg" alt="" className='w-full h-full object-contain rounded-full' />
        </li>
        <li className='text-secondary flex flex-col items-center'>
          <span className='font-semibold'>
            Leo Messi
          </span>
          <span className='text-sm text-gray-400 font-normal'>
          Admin
          </span>
        </li>
      </ul>
    </>
  )
}

export default Profile
