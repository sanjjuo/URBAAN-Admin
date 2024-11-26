import React from 'react'
import {
    Card,
    Typography,
    CardBody,
    Chip,
} from "@material-tailwind/react";
import MonthMenu from './MonthMenu';

const TABLE_HEAD = ["Product Name", "Location", "Date", "Piece", "Amount", "Status"];

const ORDERS = [
    {
        img: "/p1.jpg",
        product: "Stylish Crop Top",
        location: "Texas",
        date: "23/04/18",
        piece: "423",
        amount: "395",
        status: "delivered", // Updated status
    },
    {
        img: "/p2.jpg",
        product: "Violet Crop Top",
        location: "California",
        date: "10/04/24",
        piece: "423",
        amount: "600",
        status: "pending", // Updated status
    },
    {
        img: "/p3.jpg",
        product: "Traditional Kurti",
        location: "California",
        date: "10/04/24",
        piece: "423",
        amount: "600",
        status: "cancelled", // Updated status
    },
];

const RecentOrders = () => {
    return (
        <>
            <Card className="h-full w-full p-10">
                <div>
                    <ul className='flex items-center justify-between'>
                        <li className="text-2xl font-medium text-secondary">Recent Orders</li>
                        <li><MonthMenu /></li>
                    </ul>
                </div>
                <CardBody className="p-0 mt-10">
                    <table className="mt-0 w-full min-w-max table-auto text-left shadow-none border-none">
                        <thead className='bg-quaternary'>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            className="leading-none uppercase font-custom text-sm font-semibold text-secondary"
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
                                        : "p-4 border-b border-gray-300"

                                    return (
                                        <tr key={index}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-2">
                                                    <div className='w-[60px] h-[60px] rounded-md'>
                                                        <img src={item.img} alt={item.product} className='w-full h-full object-cover rounded-md' />
                                                    </div>
                                                    <Typography
                                                        variant="small"
                                                        className="font-normal font-custom text-xs"
                                                    >
                                                        {item.product}
                                                    </Typography>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal font-custom text-xs"
                                                >
                                                    {item.location}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal font-custom text-xs"
                                                >
                                                    {item.date}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal font-custom text-xs"
                                                >
                                                    {item.piece}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    className="font-normal font-custom text-xs"
                                                >
                                                    ₹{item.amount}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                    <Chip
                                                        className={`
                                                            ${item.status === "delivered" ? "text-deliveredBg bg-deliveredBg/20 capitalize text-xs text-center font-normal" : ""}
                                                            ${item.status === "processing" ? "text-processingBg bg-processingBg/20 capitalize text-xs text-center font-normal" : ""}
                                                            ${item.status === "cancelled" ? "text-cancelBg bg-cancelBg/20 capitalize text-xs text-center font-normal" : ""}
                                                            ${item.status === "shipped" ? "text-shippedBg bg-shippedBg/20 capitalize text-xs text-center font-normal" : ""}
                                                            ${item.status === "pending" ? "text-pendingBg bg-pendingBg/20 capitalize text-xs text-center font-normal" : ""}
                                                            ${!["delivered", "processing", "cancelled", "shipped", "pending"].includes(item.status) ? "text-gray-500 bg-gray-200 capitalize text-xs text-center font-normal" : ""}
                                                          `}
                                                        value={
                                                            item.status === "delivered" ? "Delivered" :
                                                            item.status === "pending" ? "Pending" :
                                                            item.status === "cancelled" ? "Cancelled" : "Unknown"
                                                        }
                                                    />
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
