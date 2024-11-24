import React, { useState } from 'react';
import { ImFilter } from "react-icons/im";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const InvoiceFilter = () => {
    const [selectedDate, setSelectedDate] = useState("14 Feb 2024");
    const [selectedStatus, setSelectedStatus] = useState("Payment Status");

    const dropdownData = [
        {
            label: selectedDate,
            options: ["20 July 2024", "10 Oct 2024", "02 Nov 2024", "25 Dec 2024", "17 Jan 2025"],
            onSelect: setSelectedDate,
        },
        {
            label: selectedStatus,
            options: ["Paid", "Unpaid", "Refund"],
            onSelect: setSelectedStatus,
        },
    ];

    const handleReset = () => {
        setSelectedDate("14 Feb 2024");
        setSelectedStatus("Order Status");
    };
    return (
        <>
            <ul className="flex items-center gap-1 text-secondary">
                <li className="bg-white border-[1px] border-gray-300 rounded-full p-1 w-14 h-14 flex items-center justify-center">
                    <ImFilter />
                </li>
                <li className="bg-white font-normal border-[1px] border-gray-300 rounded-xl p-1 w-24 h-14 flex items-center justify-center">Filter By</li>
                {dropdownData.map(({ label, options, onSelect }, index) => (
                    <li key={index} className='bg-white font-normal border-[1px] border-gray-300 rounded-xl p-1 w-44 h-14 flex items-center justify-center'>
                        <Menu placement="bottom-end">
                            <MenuHandler>
                                <Button
                                    className="p-0 cursor-pointer hover:shadow-none font-custom flex items-center gap-10 bg-transparent !text-secondary capitalize text-sm font-normal shadow-none"
                                >
                                    {label}
                                    <ChevronDownIcon strokeWidth={2.5} className="h-4 w-4 transition-transform" />
                                </Button>
                            </MenuHandler>
                            <MenuList>
                                {options.map((option) => (
                                    <MenuItem
                                        key={option}
                                        onClick={() => onSelect(option)}
                                        className="font-custom"
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </li>
                ))}
                <li className="bg-white cursor-pointer font-normal border-[1px] border-gray-300 rounded-xl p-1 w-32 h-14 flex items-center justify-center gap-1 
                    text-red-500 hover:text-primary" onClick={handleReset}>
                    <PiArrowCounterClockwiseBold />
                    Reset Filter
                </li>
            </ul>
        </>
    )
}

export default InvoiceFilter