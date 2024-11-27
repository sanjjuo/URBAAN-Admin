import { Button } from '@material-tailwind/react'
import React from 'react'

const EditSubCategories = ({ selectedImage, handlImageUpload }) => {
    return (
        <>
            <div className='bg-white rounded-xl shadow-md sticky top-5 transition-all duration-300 ease-in-out'>
                <div className='p-5'>
                    <h2 className="text-lg font-medium mb-0 text-secondary">Edit Sub Categories</h2>
                </div>
                <hr />
                <div className='p-5'>
                    <form action="" className='space-y-5'>
                        {/* title */}
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='font-normal text-sm'>Sub Category title</label>
                            <input type="text" name="name" id="" placeholder='Other Accessories' className='border-[1px] 
                                    bg-gray-100/50 p-2 rounded-md placeholder:text-sm placeholder:font-light placeholder:text-gray-500
                                     focus:outline-none'/>
                        </div>

                        {/* category */}
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='font-normal text-sm'>Category</label>
                            <select
                                name="selectField"
                                className="w-full text-sm text-gray-500 font-light bg-gray-100/50 border p-2 rounded focus:outline-none focus:cursor-pointer"
                            >
                                <option value="Option 1">Kurti</option>
                                <option value="Option 2">Maternity Wear</option>
                                <option value="Option 3">Bottom</option>
                            </select>
                        </div>

                        {/* image upload */}
                        <div>
                            <label htmlFor="" className='font-normal text-sm'>Image</label>
                            <div className='w-full h-48 flex justify-center items-center border-2 rounded-xl mt-2'>
                                {!selectedImage ? (
                                    <>
                                        <input
                                            type="file"
                                            id="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handlImageUpload}
                                        />
                                        <label
                                            htmlFor="file"
                                            className="flex flex-col items-center cursor-pointer"
                                        >
                                            <img src="/imgupload.png" alt="" className='w-16' />
                                            <p className="text-secondary text-sm">Browse files to upload</p>
                                        </label>
                                    </>
                                ) : (
                                    <img
                                        src={selectedImage}
                                        alt="Uploaded"
                                        className="w-full h-full rounded-lg"
                                    />
                                )}
                            </div>
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

export default EditSubCategories
