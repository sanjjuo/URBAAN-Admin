import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export function AddCouponModal({ open, handleOpen }) {

    return (
        <>
            <Dialog open={open} handler={handleOpen} size='sm'>
                <DialogHeader className="text-lg font-custom font-semibold mb-0 text-secondary">Add Coupon</DialogHeader>
                <DialogBody>
                    <div className='p-5'>
                        <form action="" className='space-y-5'>
                            {/* title */}
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="" className='font-normal text-sm'>Coupon title</label>
                                <input type="text" name="name" id="" placeholder='Gift Voucher' className='border-[1px] 
                                    bg-gray-100/50 p-2 rounded-md placeholder:text-sm placeholder:font-light placeholder:text-gray-500
                                     focus:outline-none'/>
                            </div>
                            {/* Code and category */}
                            <div className='flex justify-between items-center gap-2'>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='font-normal text-sm'>Code</label>
                                    <input type="text" name="name" id="" placeholder='FESTIVAL15' className='border-[1px] 
                                    bg-gray-100/50 p-2 rounded-md placeholder:text-sm placeholder:font-light placeholder:text-gray-500
                                     focus:outline-none'/>
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='font-normal text-sm'>Category Type</label>
                                    <select
                                        name="selectField"
                                        className="w-full text-sm text-gray-500 font-light bg-gray-100/50 border p-3 rounded-md focus:outline-none focus:cursor-pointer"
                                    >
                                        <option value="Option 1">Kurti</option>
                                        <option value="Option 2">Kurti Set</option>
                                        <option value="Option 3">Bottom</option>
                                    </select>
                                </div>
                            </div>
                            {/* Start and End Date */}
                            <div className='flex justify-between items-center gap-2'>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='font-normal text-sm'>Start Date</label>
                                    <input type="date" name="" id="" placeholder="02 Dec 2022" className='border-[1px] 
                                    bg-gray-100/50 p-2 rounded-md placeholder:text-sm placeholder:font-light placeholder:text-gray-500
                                     focus:outline-none'/>
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='font-normal text-sm'>End Date</label>
                                    <input type="date" name="" id="" placeholder="02 Dec 2022" className='border-[1px] 
                                    bg-gray-100/50 p-2 rounded-md placeholder:text-sm placeholder:font-light placeholder:text-gray-500
                                     focus:outline-none'/>
                                </div>
                            </div>
                            {/* Amount/ Status */}
                            <div className='flex justify-between items-center gap-2'>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label htmlFor="" className='font-normal text-sm'>Amount/Percentage</label>
                                    <input type="text" name="name" id="" placeholder='50%' className='border-[1px] 
                                    bg-gray-100/50 p-2 rounded-md placeholder:text-sm placeholder:font-light placeholder:text-gray-500
                                     focus:outline-none'/>
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label className='font-normal text-sm'>Status</label>
                                    <select
                                        name="selectField"
                                        className="w-full text-sm text-gray-500 font-light bg-gray-100/50 border p-3 rounded-md focus:outline-none focus:cursor-pointer"
                                    >
                                        <option value="Option 1">Active</option>
                                        <option value="Option 2">Expired</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}