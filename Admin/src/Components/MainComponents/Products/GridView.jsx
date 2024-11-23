import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    List,
    ListItem
} from '@material-tailwind/react'
import React from 'react'
import { FaPlus, FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const GridView = () => {

    const product = [
        {
            id: "1",
            img: "/p1.jpg",
            product: "Stylish Crop Top",
            rating: "4.9",
            price: "500",
            description: "trendy, comfy crop top...",
            publish: "15-Nov-2024",
            stocks: "12",
            orders: "48"
        },
        {
            id: "2",
            img: "/p2.jpg",
            product: "Stylish Crop Top",
            rating: "4.1",
            price: "400",
            description: "trendy, comfy crop top...",
            publish: "15-jan-2024",
            stocks: "22",
            orders: "88"
        },
        {
            id: "3",
            img: "/p3.jpg",
            product: "Stylish Crop Top",
            rating: "4.5",
            price: "500",
            description: "trendy, comfy crop top...",
            publish: "15-Nov-2024",
            stocks: "12",
            orders: "48"
        },
    ]
    return (
        <>
            <div className='space-y-5'>
            <Link to='/addProduct'><Button className='flex items-center gap-1 bg-buttonBg font-custom font-normal'><FaPlus />Add product</Button></Link>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
                    {
                        product.map((item, index) => (
                            <Card className="w-full cursor-default group" key={index}>
                                <CardHeader shadow={false} floated={false} className="h-64 overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt="card-image"
                                        className="h-full w-full object-cover rounded-xl transition transform scale-100 duration-500 ease-in-out
                                            group-hover:scale-110"
                                    />
                                </CardHeader>
                                <CardBody className='p-4'>
                                    <div className="mb-2 flex items-center justify-between">
                                        <Typography color="blue-gray" className="font-semibold font-custom text-primary">
                                            Rs. {item.price}
                                        </Typography>
                                        <Typography color="blue-gray" className="flex items-center justify-center gap-1 font-normal font-custom text-secondary">
                                            {item.rating}<FaStar className='text-ratingBg' />
                                        </Typography>
                                    </div>
                                    <div className='space-y-1'>
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="font-custom text-base text-secondary font-semibold"
                                        >
                                            {item.product}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="font-custom text-sm capitalize font-normal"
                                        >
                                            {item.description}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="font-custom text-sm capitalize font-normal text-buttonBg"
                                        >
                                            Published on {item.publish}
                                        </Typography>
                                    </div>
                                    <div className='mt-5'>
                                        <ul className='flex items-center gap-10'>
                                            <li className='flex flex-col items-center'>
                                                <span className='text-lg text-secondary font-semibold'>{item.stocks}</span>
                                                <span className='font-normal capitalize'>stocks</span>
                                            </li>
                                            <li className='flex flex-col items-center'>
                                                <span className='text-lg text-secondary font-semibold'>{item.orders}</span>
                                                <span className='font-normal capitalize'>orders</span>
                                            </li>
                                        </ul>
                                    </div>
                                </CardBody>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default GridView
