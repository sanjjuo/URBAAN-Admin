import React, { useState } from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export function PlaceMenu() {
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState("Place"); // Track selected place

    const handleMenuItemClick = (place) => {
        setSelectedPlace(place); // Update selected place
        setOpenMenu(false); // Close the menu
    };

    return (
        <Menu placement="bottom-end" open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
                <Button className="cursor-pointer flex items-center gap-5 font-custom bg-transparent text-gray-700 capitalize text-xs font-normal
                border-gray-400 border-[1px] shadow-none rounded-md px-2 lg:py-1 py-2 focus:shadow-none focus:outline-none hover:shadow-none outline-none">
                    {selectedPlace} {/* Display selected place */}
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""}`}
                    />
                </Button>
            </MenuHandler>
            <MenuList>
                {["Kerala", "Tamil Nadu", "Banglore", "Delhi", "Mumbai"].map((place) => (
                    <MenuItem 
                        key={place}
                        onClick={() => handleMenuItemClick(place)} 
                        className="font-custom text-xs"
                    >
                        {place}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
