import React, { useContext } from 'react'
import { Button, Card, CardFooter, Chip, IconButton, Typography } from "@material-tailwind/react";
import { AppContext } from '../../../StoreContext/StoreContext';
import { DeleteModal } from '../../DeleteModal/DeleteModal';

const TABLE_HEAD = ["Discount", "Coupon Title", "Code", "Start Date", "End Date", "Status", "Action"];

const TABLE_ROWS = [
    {
        discount: "20%",
        couponTitle: "christmas sale",
        code: "CHRISTMAS20",
        startDate: "15 Jan 2024",
        endDate: "25 Feb 2024",
        status: "expired"
    },
    {
        discount: "40%",
        couponTitle: "summer sale",
        code: "SUMMER40",
        startDate: "14 Feb 2024",
        endDate: "24 March 2024",
        status: "expired"
    },
    {
        discount: "₹500",
        couponTitle: "great festival",
        code: "SALES60",
        startDate: "12 March 2024",
        endDate: "12 April 2024",
        status: "expired"
    },
    {
        discount: "60%",
        couponTitle: "cyber sale",
        code: "CYBER10",
        startDate: "18 April 2024",
        endDate: "18 May 2024",
        status: "active"
    },
    {
        discount: "20%",
        couponTitle: "gift voucher",
        code: "SUMMER10",
        startDate: "20 May 2024",
        endDate: "20 June 2024",
        status: "active"
    },
];


const CouponsTable = () => {
    const { open, handleOpen } = useContext(AppContext)
    return (
        <>
            <Card className="h-full w-full shadow-none bg-transparent">
                <table className="w-full table-auto text-left border-collapse">
                    <thead>
                        <tr className='bg-white'>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-gray-300 p-4 text-center"
                                >
                                    <Typography
                                        variant="small"
                                        className="font-semibold font-custom text-secondary leading-none text-sm uppercase"
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
                            const classes = isLast
                                ? "p-4 text-center"
                                : "p-4 border-b border-gray-300 text-center";

                            return (
                                <tr key={index}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal font-custom text-xs"
                                        >
                                            {item.discount}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal capitalize font-custom text-xs"
                                        >
                                            {item.couponTitle}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal font-custom text-xs"
                                        >
                                            {item.code}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal font-custom text-xs"
                                        >
                                            {item.startDate}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal font-custom text-xs"
                                        >
                                            {item.endDate}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Chip
                                            className={`
                                                 ${item.status === "expired" ? "text-cancelBg bg-cancelBg/20 capitalize text-xs text-center font-normal" : ""}
                                                 ${item.status === "active" ? "text-shippedBg bg-shippedBg/20 capitalize text-xs text-center font-normal" : ""}
                                                 ${!["expired", "active"].includes(item.status) ? "text-gray-500 bg-gray-200 capitalize text-xs text-center font-normal" : ""}
                                                    `}
                                            value={
                                                item.status === "expired" ? "Expired" :
                                                    item.status === "active" ? "Active" : "Unknown"
                                            }

                                        />
                                    </td>
                                    <td className={classes}>
                                        <div className="flex justify-center gap-2 text-xs">
                                            <button className="text-buttonBg bg-editBg w-14 h-7 flex justify-center items-center rounded-md
                                                hover:bg-buttonBg hover:text-editBg">
                                                Edit
                                            </button>
                                            <button onClick={() => handleOpen("deleteModal")} className="text-deleteBg bg-primary/20 w-14 h-7 flex justify-center items-center rounded-md
                                            hover:bg-primary hover:text-white">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Button variant="outlined" size="sm" className='font-custom border-gray-300 font-normal capitalize 
                    text-xs cursor-pointer hover:bg-black hover:text-white'>
                        Prev. Page
                    </Button>
                    <div className="flex items-center gap-2">
                        <IconButton variant="outlined" size="sm">
                            1
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            2
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            3
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            ...
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            8
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            9
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            10
                        </IconButton>
                    </div>
                    <Button variant="outlined" size="sm" className='font-custom border-gray-300 font-normal capitalize text-xs 
                    cursor-pointer hover:bg-black hover:text-white'>
                        Next Page
                    </Button>
                </CardFooter>
            </Card>
            <DeleteModal
                open={open === "deleteModal"}
                handleOpen={handleOpen}
                title="Are you sure ?"
                description="Do you really want to delete this item? This action cannot be undone."
            />
        </>
    )
}

export default CouponsTable
