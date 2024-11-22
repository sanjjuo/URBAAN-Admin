import React from 'react'

const AddProduct = () => {
    return (
        <>
            <h1 className='text-2xl lg:text-3xl font-semibold'>Create Product</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-5">
                <div className='bg-white rounded-xl shadow-md'>
                    <div className='p-5'>
                        <h2 className="text-xl font-medium mb-3 lg:mb-0 text-secondary">Product Information</h2>
                    </div>
                    <hr />
                    <div className='p-5'>
                        <form action="" className='space-y-5'>
                            {/* title */}
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="" className='font-normal'>Product title</label>
                                <input type="text" name="name" id="" placeholder='Enter Product title' className='border-[1px] 
                                    bg-gray-100/50 p-2 rounded-md placeholder:text-sm placeholder:font-light placeholder:text-gray-500
                                     focus:outline-none'/>
                            </div>
                            {/* category */}
                            <div className='flex justify-between items-center gap-2'>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className="font-normal">Product Category</label>
                                    <select
                                        name="selectField"
                                        className="w-full bg-gray-100/50 border p-2 rounded focus:outline-none focus:cursor-pointer"
                                    >
                                        <option value="Option 1">Kurti</option>
                                        <option value="Option 2">Maternity Wear</option>
                                        <option value="Option 3">Bottom</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className="font-normal">Sub Category</label>
                                    <select
                                        name="selectField"
                                        className="w-full bg-gray-100/50 border p-2 rounded focus:outline-none focus:cursor-pointer"
                                    >
                                        <option value="Option 1">Ethnic Wear</option>
                                        <option value="Option 2">Comfy Wear</option>
                                        <option value="Option 3">Ethnic Wear</option>
                                    </select>
                                </div>
                            </div>
                            {/* price */}
                            <div className='flex justify-between items-center gap-2'>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className="font-normal">Actual Price</label>
                                    <select
                                        name="selectField"
                                        className="w-full bg-gray-100/50 border p-2 rounded focus:outline-none focus:cursor-pointer"
                                    >
                                        <option value="Option 1">Rs. 1000</option>
                                        <option value="Option 2">Rs. 2500</option>
                                        <option value="Option 3">Rs. 500</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className="font-normal">Discount (%)</label>
                                    <select
                                        name="selectField"
                                        className="w-full bg-gray-100/50 border p-2 rounded focus:outline-none focus:cursor-pointer"
                                    >
                                        <option value="Option 1">50%</option>
                                        <option value="Option 2">25%</option>
                                        <option value="Option 3">15%</option>
                                    </select>
                                </div>
                            </div>
                            {/* offer price */}
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="" className='font-normal'>Offer Price</label>
                                <input type="text" name="name" id="" placeholder='Rs. 500' className='border-[1px] 
                                    bg-gray-100/50 p-2 rounded-md placeholder:text-sm placeholder:font-light placeholder:text-gray-500
                                     focus:outline-none'/>
                            </div>
                            {/* description */}
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="" className='font-normal'>Product Description</label>
                                <textarea
                                    name="description"
                                    rows="5"
                                    className="w-full border-[1px] bg-gray-100/50 p-2 rounded resize-none overflow-y-scroll focus:outline-none
                                        placeholder:text-sm placeholder:font-light placeholder:text-gray-500"
                                    placeholder="Enter your description here..."
                                    style={{ maxHeight: '150px' }}
                                ></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct
