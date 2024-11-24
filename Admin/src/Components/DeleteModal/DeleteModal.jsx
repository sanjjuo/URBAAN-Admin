import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";

export function DeleteModal({ open, handleOpen }) {

    return (
        <>
            <Dialog open={open} handler={handleOpen} size='sm' className='rounded-none'>
                <DialogBody className='flex flex-col justify-center items-center p-10 space-y-5'>
                    <div className='w-14 h-14'>
                        <img src="/close.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <Typography className='font-custom text-2xl text-secondary font-semibold'>
                        Are you sure ?
                    </Typography>
                    <Typography className='font-custom text-md text-gray-500 font-light text-center'>
                        Do you really want to delete this ? After deleting you can't undone
                    </Typography>
                    <div className='flex items-center space-x-2'>
                        <Button
                            className='bg-gray-300 text-black font-custom capitalize text-sm tracking-wider font-normal w-40'
                            onClick={handleOpen}
                        >
                            <span>Close</span>
                        </Button>
                        <Button className='bg-deleteBg text-white font-custom capitalize text-sm tracking-wider font-normal w-40'
                            onClick={handleOpen}>
                            <span>Delete</span>
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}