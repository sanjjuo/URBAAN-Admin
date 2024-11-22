import {
    List,
    ListItem,
    ListItemPrefix,
    Card
} from "@material-tailwind/react";
import { useState } from 'react'
import { IoMdTimer } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import { CgListTree } from "react-icons/cg";
import { TbListCheck } from "react-icons/tb";
import { RiCouponLine } from "react-icons/ri";
import { PiUsers } from "react-icons/pi";
import { TbFileInvoice } from "react-icons/tb";
import { Link } from "react-router-dom"

export function AppSidebar() {
    const [activeLink, setActiveLink] = useState("dashboard")
    return (
        <>
            <Card className="hidden lg:block h-screen lg:w-64 pt-4 shadow-none rounded-none">
                <div className='flex justify-center items-center'>
                    <div className="mb-2 pt-2 w-28 rounded-3xl">
                        <img src="/logo.png" alt="" className='w-full object-contain' />
                    </div>
                </div>
                <List className='mt-14 px-4'>
                    <Link to="/">
                        <ListItem onClick={() => setActiveLink('dashboard')} className={`text-secondary text-base transition-all duration-300 ease-in-out
                            ${activeLink === "dashboard" ? "!bg-primary text-white py-6 focus:!text-white" : "bg-none"}`}>
                            <ListItemPrefix>
                                <IoMdTimer className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                    </Link>

                    <Link to='/category'>
                        <ListItem onClick={() => setActiveLink('category')} className={`text-secondary text-base transition-all duration-300 ease-in-out
                            ${activeLink === "category" ? "!bg-primary text-white py-6 focus:!text-white" : "bg-none"}`}>
                            <ListItemPrefix>
                                <MdOutlineCategory className="h-5 w-5" />
                            </ListItemPrefix>
                            Category
                        </ListItem>
                    </Link>
                    <Link to='/subcategory'>
                        <ListItem onClick={() => setActiveLink('subcategory')} className={`text-secondary text-base transition-all duration-300 ease-in-out
                            ${activeLink === "subcategory" ? "!bg-primary text-white py-6 focus:!text-white" : "bg-none"}`}>
                            <ListItemPrefix>
                                <CgListTree className="h-5 w-5" />
                            </ListItemPrefix>
                            Sub Category
                        </ListItem>
                    </Link>

                    <Link to='/orderlist'>
                        <ListItem onClick={() => setActiveLink('orderlist')} className={`text-secondary text-base transition-all duration-300 ease-in-out
                            ${activeLink === "orderlist" ? "!bg-primary text-white py-6 focus:!text-white" : "bg-none"}`}>
                            <ListItemPrefix>
                                <TbListCheck className="h-5 w-5" />
                            </ListItemPrefix>
                            Order List
                        </ListItem>
                    </Link>

                    <Link to='/coupon'>
                        <ListItem onClick={() => setActiveLink('coupon')} className={`text-secondary text-base transition-all duration-300 ease-in-out
                            ${activeLink === "coupon" ? "!bg-primary text-white py-6 focus:!text-white" : "bg-none"}`}>
                            <ListItemPrefix>
                                <RiCouponLine className="h-5 w-5" />
                            </ListItemPrefix>
                            Coupons
                        </ListItem>
                    </Link>

                    <Link to='/userslist'>
                        <ListItem onClick={() => setActiveLink('userslist')} className={`text-secondary text-base transition-all duration-300 ease-in-out
                            ${activeLink === "userslist" ? "!bg-primary text-white py-6 focus:!text-white" : "bg-none"}`}>
                            <ListItemPrefix>
                                <PiUsers className="h-5 w-5" />
                            </ListItemPrefix>
                            User's List
                        </ListItem>

                    </Link>
                    <Link to='/invoice'>
                        <ListItem onClick={() => setActiveLink('invoice')} className={`text-secondary text-base transition-all duration-300 ease-in-out
                            ${activeLink === "invoice" ? "!bg-primary text-white py-6 focus:!text-white" : "bg-none"}`}>
                            <ListItemPrefix>
                                <TbFileInvoice className="h-5 w-5" />
                            </ListItemPrefix>
                            Invoice
                        </ListItem>
                    </Link>
                </List>
            </Card>
        </>
    );
}