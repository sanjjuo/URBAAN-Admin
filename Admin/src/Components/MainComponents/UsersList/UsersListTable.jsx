import React, { useContext } from 'react'
import { Button, Card, CardFooter, Chip, IconButton, Typography } from "@material-tailwind/react";
import { AppContext } from '../../../StoreContext/StoreContext';
import { DeleteModal } from '../../DeleteModal/DeleteModal';

const TABLE_HEAD = ["user name", "mobile", "address", "city", "district", "state", "pincode", "Action"];

const TABLE_ROWS = [
    {
        name: "arya nair",
        mobile: "9845464142",
        address: "089 kutch green apt.448",
        city: "kochi",
        district: "ernakulam",
        state: "Kerala",
        pincode: "682001"
    },
    {
        name: "alex",
        mobile: "7902501645",
        address: "089 kutch green apt.448",
        city: "mankada",
        district: "malappuram",
        state: "Kerala",
        pincode: "679324"
    },
    {
        name: "sneha pillai",
        mobile: "9945464142",
        address: "089 kutch green apt.448",
        city: "mannarkkad",
        district: "palakkad",
        state: "Kerala",
        pincode: "682501"
    },
    {
        name: "mary",
        mobile: "7845464142",
        address: "089 kutch green apt.448",
        city: "nadakkavu",
        district: "kozhikode",
        state: "Kerala",
        pincode: "675901"
    },
];


const UsersListTable = () => {
    const { open, handleOpen } = useContext(AppContext)
    return (
        <>
            <Card className="h-full w-full shadow-none bg-transparent">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr className='bg-white'>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        className="font-semibold font-custom text-secondary leading-none text-base uppercase"
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
                            const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

                            return (
                                <tr key={index}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal capitalize font-custom text-secondary"
                                        >
                                            {item.name}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal capitalize font-custom text-secondary"
                                        >
                                            {item.mobile}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal capitalize font-custom text-secondary"
                                        >
                                            {item.address}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal capitalize font-custom text-secondary"
                                        >
                                            {item.city}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal capitalize font-custom text-secondary"
                                        >
                                            {item.district}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal capitalize font-custom text-secondary"
                                        >
                                            {item.state}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal font-custom text-secondary"
                                        >
                                            {item.pincode}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex gap-2 text-sm">
                                            <button className="text-buttonBg bg-editBg w-14 h-7 flex justify-center items-center rounded-md
                                            hover:bg-buttonBg hover:text-editBg">
                                                Edit
                                            </button>
                                            <button onClick={handleOpen} className="text-deleteBg bg-primary/20 w-14 h-7 flex justify-center items-center rounded-md
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
                    text-sm cursor-pointer hover:bg-black hover:text-white'>
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
                    <Button variant="outlined" size="sm" className='font-custom border-gray-300 font-normal capitalize text-sm 
                    cursor-pointer hover:bg-black hover:text-white'>
                        Next Page
                    </Button>
                </CardFooter>
            </Card>
            <DeleteModal open={open} handleOpen={handleOpen} />
        </>
    )
}

export default UsersListTable
