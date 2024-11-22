import React from 'react'
import {
    Card,
    Typography,
    CardBody,
    Chip,
    Avatar,
} from "@material-tailwind/react";
import { MonthMenu } from './MonthMenu';

const TABLE_HEAD = ["Product Name", "Location", "Date", "Piece", "Amount", "Status"];

const ORDERS = [
    {
        img: "/crop.jpg",
        product: "Stylish Crop Top",
        location: "Texas",
        date: "23/04/18",
        piece: "423",
        amount: "395",
        status: "delivered", // Updated status
    },
    {
        img: "/crop2.jpg",
        product: "Stylish Crop Top",
        location: "California",
        date: "10/04/24",
        piece: "423",
        amount: "600",
        status: "pending", // Updated status
    },
    {
        img: "/crop.jpg",
        product: "Stylish Crop Top",
        location: "California",
        date: "10/04/24",
        piece: "423",
        amount: "600",
        status: "rejected", // Updated status
    },
];

const RecentOrders = () => {
    return (
        <>
            <Card className="hidden lg:block h-full w-full p-10">
                <div>
                    <ul className='flex items-center justify-between'>
                        <li className="text-2xl font-medium text-secondary">Recent Orders</li>
                        <li><MonthMenu /></li>
                    </ul>
                </div>
                <CardBody className="p-0 mt-10">
                    <table className="mt-0 w-full min-w-max table-auto text-center shadow-none border-none">
                        <thead className='bg-quaternary shadow-md'>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="p-4 w-40"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="leading-none font-custom text-base font-semibold text-secondary"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {ORDERS.map(
                                (item, index) => {
                                    const isLast = index === ORDERS.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4"

                                    return (
                                        <tr key={index}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    <Avatar src={item.img} alt={item.product} size="md" className/>
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
                                                    {item.location}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal font-custom"
                                                >
                                                    {item.date}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal font-custom"
                                                >
                                                    {item.piece}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal font-custom"
                                                >
                                                    Rs. {item.amount}
                                                </Typography>
                                            </td>
                                            <td className='p-4 flex justify-center items-center'>
                                                <div className="w-max">
                                                    <Chip
                                                        variant="ghost"
                                                        size="sm"
                                                        className='font-custom capitalize font-normal text-sm w-24 text-center tracking-wider rounded-md'
                                                        value={
                                                            item.status === "delivered" ? "Delivered" :
                                                            item.status === "pending" ? "Pending" : 
                                                            item.status === "rejected" ? "Rejected" : "Unknown"
                                                        }
                                                        color={
                                                            item.status === "delivered" ? "green" :
                                                            item.status === "pending" ? "orange" :
                                                            item.status === "rejected" ? "red" : "gray"
                                                        }
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </>
    )
}

export default RecentOrders
