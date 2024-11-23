import { Button, Card, Typography } from '@material-tailwind/react'
import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TABLE_HEAD = ["Product Name", "Stock", "Rate", "Price", "Orders", "Publish", "Action"];
const TABLE_ROWS = [
    {
        img: "/p1.jpg",
        product: "Crop Top",
        stock: "12",
        rating: "4.9",
        price: "500",
        orders: "12",
        publish: "12 jan 2025"
    },
    {
        img: "/p2.jpg",
        product: "Crop Top",
        stock: "12",
        rating: "4.9",
        price: "500",
        orders: "12",
        publish: "12 jan 2025"
    },
    {
        img: "/p3.jpg",
        product: "Crop Top",
        stock: "12",
        rating: "4.9",
        price: "500",
        orders: "12",
        publish: "12 jan 2025"
    },
    {
        img: "/p1.jpg",
        product: "Crop Top",
        stock: "12",
        rating: "4.9",
        price: "500",
        orders: "12",
        publish: "12 jan 2025"
    },
];

const ListView = () => {
    return (
        <>
            <div className='space-y-5'>
                <Link to='/addProduct'><Button className='flex items-center gap-1 bg-buttonBg font-custom font-normal'><FaPlus />Add product</Button></Link>
                <div className='bg-white rounded-xl h-screen shadow-md p-5'>
                    <Card className="w-full shadow-none">
                        <table className="w-full min-w-max table-auto text-left rounded-2xl">
                            <thead>
                                <tr className='bg-quaternary'>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-medium text-secondary text-base leading-none font-custom"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {TABLE_ROWS.map((item, index) => {
                                    const isLast = index === TABLE_ROWS.length - 1;
                                    const classes = isLast ? "p-4" : "p-4";

                                    return (
                                        <tr key={index}>
                                            <td className={classes}>
                                                <div className='flex items-center gap-2'>
                                                    <div className='w-[50px] h-[50px] rounded-md'>
                                                        <img src={item.img} alt={item.product} className='w-full h-full object-cover rounded-md' />
                                                    </div>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal font-custom"
                                                    >
                                                        {item.product}
                                                    </Typography>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal font-custom"
                                                >
                                                    {item.stock}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal font-custom flex items-center gap-1"
                                                >
                                                    <FaStar className='text-ratingBg' />{item.rating}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal font-custom"
                                                >
                                                    Rs. {item.price}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal font-custom"
                                                >
                                                    {item.orders}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal font-custom"
                                                >
                                                    {item.publish}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal font-custom"
                                                >
                                                    <HiOutlineDotsHorizontal />
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Card>
                </div>

            </div>
        </>
    )
}

export default ListView
