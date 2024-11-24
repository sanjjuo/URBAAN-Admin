import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const UsersListSearchBar = () => {
    return (
        <>
            <div className="border border-gray-300 py-1 px-2 flex items-center gap-1 rounded-xl bg-white h-14 w-96">
                <IoIosSearch className="text-gray-700 text-2xl" />
                <input
                    type="search"
                    name="search"
                    placeholder="Search for user"
                    className="bg-transparent placeholder:text-gray-700 placeholder:text-md font-light focus:outline-none text-secondary w-full"
                />
            </div>
        </>
    )
}

export default UsersListSearchBar
