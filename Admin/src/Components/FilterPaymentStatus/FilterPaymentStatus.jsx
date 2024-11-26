import React, { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
    Menu,
    MenuHandler,
    MenuList,
    Button,
} from "@material-tailwind/react";

const paymentStatus = [
    "Paid",
    "Unpaid",
    "Refund",
];

export function FilterPaymentStatus() {
    const [selectedPaymentStatus, setSelectedPaymentStatus] = useState("Payment Status");
    return (
        <Menu>
            <MenuHandler>
                <Button
                    className="!bg-white text-secondary rounded-xl cursor-pointer flex items-center gap-5 p-3 font-custom capitalize text-sm font-normal
                   border-gray-300 border-[1px] shadow-none focus:shadow-none focus:outline-none hover:shadow-none outline-none"
                    style={{ width: 'fit-content', maxWidth: '200px' }}
                >
                    <div className="flex gap-1 whitespace-nowrap">
                        {selectedPaymentStatus}
                    </div>
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className="h-3.5 w-3.5 transition-transform"
                    />
                </Button>
            </MenuHandler>
            <MenuList className="rounded-2xl w-full max-w-lg p-0">
                <div className="border-b-[1px] p-5 hover:outline-none focus:outline-none">
                    <h1 className="text-secondary font-semibold text-base text-center">Select Category</h1>
                    <ul className="mt-5 text-secondary flex flex-wrap justify-center items-center gap-2">
                        {paymentStatus.map((payment, index) => (
                            <li
                                key={index}
                                className="border-[1px] border-gray-400 text-xs w-[30%] p-2 flex justify-center items-center rounded-full"
                            >
                                {payment}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='p-5 flex flex-col justify-center items-center gap-5 hover:outline-none focus:outline-none'>
                    <p className="text-xs">*You can choose multiple categories</p>
                    <Button className="bg-primary font-custom capitalize text-xs py-2 px-4">
                        Apply now
                    </Button>
                </div>
            </MenuList>
        </Menu>
    );
}