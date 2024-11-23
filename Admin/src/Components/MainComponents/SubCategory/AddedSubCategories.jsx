import React from 'react'
import { Card, Typography, CardFooter,Button, IconButton } from "@material-tailwind/react";

const TABLE_HEAD = ["Sub Category", "Category", "Status", "Action"];

const TABLE_ROWS = [
    {
        subcategory: "Kurti",
        category: "Kurti",
        status: "enabled"
    },
    {
        subcategory: "Kurti Set",
        category: "Kurti",
        status: "disabled"
    },
    {
        subcategory: "Ethnic Wear",
        category: "Kurti",
        status: "enabled"
    },
    {
        subcategory: "Leggings",
        category: "Bottom",
        status: "enabled"
    },
    {
        subcategory: "Pallazo",
        category: "Bottom",
        status: "disabled"
    },
];

const AddedSubCategories = () => {
    return (
        <>
            <Card className="h-full w-full shadow-sm">
                <table className="w-full min-w-max table-auto text-left">
                    <thead className='bg-white shadow-md rounded-xl bg-transparent'>
                        <tr className='!rounded-xl'>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 p-4 w-40"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-semibold font-custom text-base leading-none text-secondary"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='bg-transparent'>
                        {TABLE_ROWS.map((item, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

                            return (
                                <tr key={index} className="bg-transparent">
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal font-custom"
                                        >
                                            {item.subcategory}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal font-custom"
                                        >
                                            {item.category}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color={item.status === "enabled" ? "green" :
                                                item.status === "disabled" ? "red" : ""
                                            }
                                            className="font-normal font-custom"
                                        >
                                            {item.status === "enabled" ? "Enabled" :
                                                item.status === "disabled" ? "Disabled" : ""}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex gap-2 text-sm">
                                            <button className="text-buttonBg bg-editBg w-14 h-7 flex justify-center items-center rounded-md
                                 hover:bg-buttonBg hover:text-editBg">
                                                Edit
                                            </button>
                                            <button className="text-deleteBg bg-primary/20 w-14 h-7 flex justify-center items-center rounded-md
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
                        Prev. page
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
                        Next page
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default AddedSubCategories
