import { Button } from '@material-tailwind/react'
import React from 'react'

const UserDetails = () => {
    return (
        <>
            <div className='bg-white rounded-xl shadow-md sticky top-5 transition-all duration-300 ease-in-out'>
                <div className='p-5'>
                    <h2 className="text-lg font-medium mb-3 lg:mb-0 text-secondary">User Details</h2>
                </div>
                <hr />
                <div className='p-5'>
                    <form action="" className='space-y-5'>
                        {/* title */}
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='font-normal text-sm'>User Name</label>
                            <input type="text" name="name" id="" placeholder='' className='border-[1px] 
                                    bg-gray-100/50 p-2 rounded-md placeholder:text-sm placeholder:font-light placeholder:text-gray-500
                                     focus:outline-none'/>
                        </div>

                        {/* Phone number */}
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='font-normal text-sm'>Phone Number</label>
                            <input type="text" name="name" id="" placeholder='' className='border-[1px] 
                                    bg-gray-100/50 p-2 rounded-md placeholder:text-sm placeholder:font-light placeholder:text-gray-500
                                     focus:outline-none'/>
                        </div>

                        {/* City and State */}
                        <div className='flex items-center justify-between gap-0'>
                            <div className='flex flex-col gap-1 w-48'>
                                <label htmlFor="" className='font-normal text-sm'>City</label>
                                <input type="text" name="name" id="" placeholder='' className='border-[1px] 
                                    bg-gray-100/50 p-2 rounded-md placeholder:text-sm placeholder:font-light placeholder:text-gray-500
                                     focus:outline-none'/>
                            </div>
                            <div className='flex flex-col gap-1 w-48'>
                                <label htmlFor="" className='font-normal text-sm'>State</label>
                                <input type="text" name="name" id="" placeholder='' className='border-[1px] 
                                    bg-gray-100/50 p-2 rounded-md placeholder:text-sm placeholder:font-light placeholder:text-gray-500
                                     focus:outline-none'/>
                            </div>
                        </div>

                        {/* address */}
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='font-normal text-sm'>Address</label>
                            <textarea
                                name="description"
                                rows="5"
                                className="w-full border-[1px] bg-gray-100/50 p-2 rounded resize-none overflow-y-scroll focus:outline-none
                                        placeholder:text-sm placeholder:font-light placeholder:text-gray-500"
                                placeholder="Enter your description here..."
                                style={{ maxHeight: '150px' }}
                            ></textarea>
                        </div>

                        {/* button */}
                        <div className='flex justify-end'>
                            <Button className='bg-buttonBg font-normal tracking-wider font-custom'>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserDetails