import React from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import { HiMiniXMark } from "react-icons/hi2";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import { CgListTree } from "react-icons/cg";
import { TbListCheck } from "react-icons/tb";
import { RiCouponLine } from "react-icons/ri";
import { PiUsers } from "react-icons/pi";
import { TbFileInvoice } from "react-icons/tb";

export function MobileSidebar({ open, closeDrawer }) {


    return (
        <React.Fragment>
            <Drawer open={open} onClose={closeDrawer} className="overflow-y-scroll">
                <div className="absolute top-2 right-2">
                    <HiMiniXMark onClick={closeDrawer} className='text-2xl text-secondary' />
                </div>
                <div className='py-10 border-b-[1px] border-gray-200 bg-tertiary'>
                    <ul className='flex flex-col items-center gap-3'>
                        <li className='w-[50px] h-[50px]'>
                            <img src="/profile.jpg" alt="" className='w-full h-full object-contain rounded-full' />
                        </li>
                        <li className='flex flex-col items-center'>
                            <span className='font-semibold'>Leo Messi</span>
                            <span className='text-sm text-gray-600 font-normal'>Admin</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <List className='mt-10 p-4'>
                        <ListItem className='text-secondary transition-all duration-300 ease-in-out'>
                            <ListItemPrefix>
                                <IoIosTimer className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                        <ListItem className='text-secondary transition-all duration-300 ease-in-out'>
                            <ListItemPrefix>
                                <MdOutlineCategory className="h-5 w-5" />
                            </ListItemPrefix>
                            Category
                        </ListItem>
                        <ListItem className='text-secondary transition-all duration-300 ease-in-out'>
                            <ListItemPrefix>
                                <CgListTree className="h-5 w-5" />
                            </ListItemPrefix>
                            Sub Category
                        </ListItem>
                        <ListItem className='text-secondary transition-all duration-300 ease-in-out'>
                            <ListItemPrefix>
                                <TbListCheck className="h-5 w-5" />
                            </ListItemPrefix>
                            Order List
                        </ListItem>
                        <ListItem className='text-secondary transition-all duration-300 ease-in-out'>
                            <ListItemPrefix>
                                <RiCouponLine className="h-5 w-5" />
                            </ListItemPrefix>
                            Coupons
                        </ListItem>
                        <ListItem className='text-secondary transition-all duration-300 ease-in-out'>
                            <ListItemPrefix>
                                <PiUsers className="h-5 w-5" />
                            </ListItemPrefix>
                            Users List
                        </ListItem>
                        <ListItem className='text-secondary transition-all duration-300 ease-in-out'>
                            <ListItemPrefix>
                                <TbFileInvoice className="h-5 w-5" />
                            </ListItemPrefix>
                            Invoice
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </React.Fragment>
    );
}