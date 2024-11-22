import {
    List,
    ListItem,
    ListItemPrefix,
    Card
} from "@material-tailwind/react";
import React, { useState, useEffect } from 'react'
import { IoMdTimer } from "react-icons/io";
import { MdOutlineWindow } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { CgListTree } from "react-icons/cg";
import { TbListCheck } from "react-icons/tb";
import { RiCouponLine } from "react-icons/ri";
import { PiUsersBold } from "react-icons/pi";
import { TbFileInvoice } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

export function AppSidebar() {

    const location = useLocation();
    const [activeLink, setActiveLink] = useState(() => {
        // Dynamically set the initial state based on the current path 
        // it is used for avoiding sudden display of initially "dashboard" path before showing current path or page where user on,
        const path = location.pathname;
        if (path === "/") return "dashboard";
        if (path === "/product") return "product";
        if (path === "/addProduct") return "product";
        if (path === "/category") return "category";
        if (path === "/subcategory") return "subcategory";
        if (path === "/orderlist") return "orderlist";
        if (path === "/coupon") return "coupon";
        if (path === "/userslist") return "userslist";
        if (path === "/invoice") return "invoice";
        return "dashboard"; // Fallback to "dashboard" for unknown paths
    });

    // Update active link based on the current path, used for show current page that user on after refresh
    useEffect(() => {
        const path = location.pathname;
        if (path === "/") setActiveLink("dashboard");
        else if (path === "/product") setActiveLink("product");
        else if (path === "/addProduct") setActiveLink("product");
        else if (path === "/category") setActiveLink("category");
        else if (path === "/subcategory") setActiveLink("subcategory");
        else if (path === "/orderlist") setActiveLink("orderlist");
        else if (path === "/coupon") setActiveLink("coupon");
        else if (path === "/userslist") setActiveLink("userslist");
        else if (path === "/invoice") setActiveLink("invoice");
    }, [location]);
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

                    <Link to="/product">
                        <ListItem onClick={() => setActiveLink('product')} className={`text-secondary text-base transition-all duration-300 ease-in-out
                            ${activeLink === "product" ? "!bg-primary text-white py-6 focus:!text-white" : "bg-none"}`}>
                            <ListItemPrefix>
                                <MdOutlineWindow className="h-5 w-5" />
                            </ListItemPrefix>
                            Products
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
                                <PiUsersBold className="h-5 w-5" />
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