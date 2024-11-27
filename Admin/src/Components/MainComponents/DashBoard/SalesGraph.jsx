import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { PlaceMenu } from './PlaceMenu';
import MonthMenu from './MonthMenu';

const SalesGraph = () => {
    return (
        <div className='p-10 mt-10 bg-white rounded-xl shadow-md'>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-medium mb-0 text-secondary">Sales Details</h1>
                </div>
                <ul className="flex items-center gap-2">
                    <li><PlaceMenu /></li>
                    <li><MonthMenu /></li>
                </ul>
            </div>
            <div className='w-[100%]'>
                <LineChart
                    xAxis={[
                        {
                            min: 5000, // Start value for X-axis
                            max: 60000, // End value for X-axis
                            tickNumber: 12,
                            data: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000], // X-axis ticks
                            valueFormatter: (value) => `${(value / 1000).toFixed()}k`, // Format as "5k", "10k", etc.
                        },
                    ]}
                    yAxis={[
                        {
                            min: 20,
                            max: 100,
                            tickNumber: 5, // Specify 5 ticks
                            valueFormatter: (value) => `${value}%`,
                        },
                    ]}
                    series={[
                        {
                            curve: 'linear',
                            data: [20, 28, 49, 50, 30, 54, 85, 52, 58, 61, 23, 25], // Y-axis values corresponding to X-axis
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
    );
};

export default SalesGraph;
