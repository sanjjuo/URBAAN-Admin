import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

const Overview = () => {
    return (
        <div>
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-10 mt-5">
                <div className='bg-white p-5 rounded-xl'>
                    <ul className='flex justify-between'>
                        <li className='flex flex-col gap-2'>
                            <span className='text-gray-700 text-sm'>Total Customers</span>
                            <span className='text-secondary text-2xl font-semibold'>40,689</span>
                        </li>
                        <li className='w-[45px] h-[45px] bg-O1/30 p-2 rounded-2xl'>
                            <img src="/group.png" alt="" className='w-full h-full object-contain' />
                        </li>
                    </ul>
                    <p className='flex items-center gap-2 mt-8'><FaArrowTrendUp className='text-O3' />
                        <strong className='text-O3 font-normal'>8.5 %</strong> Up from yesterday</p>
                </div>
                <div className='bg-white p-5 rounded-xl'>
                    <ul className='flex justify-between'>
                        <li className='flex flex-col gap-2'>
                            <span className='text-gray-700 text-sm'>Total Orders</span>
                            <span className='text-secondary text-2xl font-semibold'>40,689</span>
                        </li>
                        <li className='w-[45px] h-[45px] bg-O2/30 p-2 rounded-2xl'>
                            <img src="/box.png" alt="" className='w-full h-full object-contain' />
                        </li>
                    </ul>
                    <p className='flex items-center gap-2 mt-8'><FaArrowTrendUp className='text-O3' />
                        <strong className='text-O3 font-normal'>8.5 %</strong> Up from yesterday</p>
                </div>
                <div className='bg-white p-5 rounded-xl'>
                    <ul className='flex justify-between'>
                        <li className='flex flex-col gap-2'>
                            <span className='text-gray-700 text-sm'>Recent Orders</span>
                            <span className='text-secondary text-2xl font-semibold'>40,689</span>
                        </li>
                        <li className='w-[45px] h-[45px] bg-O2/30 p-2 rounded-2xl'>
                            <img src="/box.png" alt="" className='w-full h-full object-contain' />
                        </li>
                    </ul>
                    <p className='flex items-center gap-2 mt-8'><FaArrowTrendDown className='text-O4' />
                        <strong className='text-O4 font-normal'>8.5 %</strong> Up from yesterday</p>
                </div>
                <div className='bg-white p-5 rounded-xl'>
                    <ul className='flex justify-between'>
                        <li className='flex flex-col gap-2'>
                            <span className='text-gray-700 text-sm'>Total Earnings</span>
                            <span className='text-secondary text-2xl font-semibold'>40,689</span>
                        </li>
                        <li className='w-[45px] h-[45px] bg-O3/30 p-2 rounded-2xl'>
                            <img src="/chart.png" alt="" className='w-full h-full object-contain' />
                        </li>
                    </ul>
                    <p className='flex items-center gap-2 mt-8'><FaArrowTrendDown className='text-O4' />
                        <strong className='text-O4 font-normal'>8.5 %</strong> Up from yesterday</p>
                </div>
            </div>
        </div>
    )
}

export default Overview
