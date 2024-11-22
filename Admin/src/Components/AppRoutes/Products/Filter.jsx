import { Checkbox, Typography } from '@material-tailwind/react'
import React from 'react'

const Filter = ({ view, setView }) => {

    const models = ["Kurti", "Bottom", "Kurti Set", "Maternity Wear", "Night Wear", "Running Material", "Churidar Material", "Offer Zone"]

    return (
        <>
            <div className='bg-white shadow-md rounded-xl p-5 h-full'>
                <ul className='space-y-3'>
                    <li onClick={() => setView("list")} className={`text-secondary px-4 transition-all duration-300 ease-in-out cursor-pointer 
                        ${view === 'list' ? 'bg-primary/20 py-2 px-4 rounded-md text-primary' : ""}`}>List View</li>
                    <li onClick={() => setView("grid")} className={`text-secondary px-4 transition-all duration-300 ease-in-out cursor-pointer 
                        ${view === 'grid' ? 'bg-primary/20 py-2 px-4 rounded-md text-primary' : ""}`}>Grid View</li>
                </ul>
                <div className='mt-10'>
                    <h2 className='text-secondary font-medium'>Filters</h2>
                    <div className='flex flex-col'>
                        {
                            models.map(item => (
                                <Checkbox label={
                                    <Typography className='font-custom text-secondary font-normal'>{item}</Typography>
                                } color='pink' className='border-2 border-primary rounded-sm w-4 h-4' />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter
