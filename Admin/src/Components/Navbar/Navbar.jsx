import React from "react";
import {
    Navbar,
} from "@material-tailwind/react";
import { GoBellFill } from "react-icons/go";
import { LanguageSelector } from "./Language";
import { IoIosSearch } from "react-icons/io";
import Profile from "./Profile";


export function AppNavbar() {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    return (
        <>
            <div className='bg-white'>
                <Navbar className="mx-auto p-4 lg:py-2 lg:px-10 shadow-none rounded-none">
                    <div className='hidden lg:flex items-center justify-between'>
                        <ul className='w-[350px]'>
                            <li className='border-[1px] border-gray-300 py-1 px-2 flex items-center gap-2 rounded-xl bg-gray-100/50 w-full h-9'>
                                <IoIosSearch className='text-gray-500 text-xl' />
                                <input type="search" name="search" id="" placeholder='Search' className='bg-transparent 
                     placeholder:text-gray-500 placeholder:text-sm font-light focus:outline-none text-secondary w-full'/>
                            </li>
                        </ul>
                        <ul className='flex items-center gap-5'>
                            <li className="relative text-secondary text-xl cursor-pointer">
                                <GoBellFill className="text-3xl text-blue-900" />
                                <span className="absolute -top-1 -right-0 bg-red-800 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    2
                                </span>
                            </li>
                            <li><LanguageSelector /></li>
                            <li><Profile /></li>
                        </ul>
                    </div>
                </Navbar>
            </div>
        </>
    );
}