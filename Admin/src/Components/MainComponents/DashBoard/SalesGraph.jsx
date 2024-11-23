import React, { useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { PlaceMenu } from './PlaceMenu';
import { MonthMenu } from './MonthMenu';


const SalesGraph = () => {
    return (
        <>
            <div className='p-10 mt-10 bg-white rounded-xl shadow-md'>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-medium mb-0 text-secondary">Sales Details</h1>
                    </div>
                    <ul className="flex items-center gap-5">
                        <li><PlaceMenu /></li>
                        <li><MonthMenu /></li>
                    </ul>
                </div>
                <div className='w-[100%]'>
                    <LineChart
                        xAxis={[
                            {
                                min: [5000],
                                max: [40000],
                                data: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000], // X-axis range
                                valueFormatter: (value) => `${(value / 1000).toFixed()}k`, // Format as "5k, 10k, etc."
                            },
                        ]}
                        yAxis={[
                            {
                                min: [20],
                                max: [100],
                                valueFormatter: (value) => `${value}%`, // Format as percentages
                            },
                        ]}
                        series={[
                            {
                                curve: 'linear',
                                data: [20, 40, 20, 80, 60, 48, 83, 90], // Y-axis values corresponding to X-axis
                                area: false,
                                color: '#4379EE',
                            },
                        ]}
                        className="w-full"
                        height={500}
                        grid={{ vertical: false, horizontal: true }} // Enable grid lines
                    />
                </div>
            </div>
        </>
    );
};


export default SalesGraph
