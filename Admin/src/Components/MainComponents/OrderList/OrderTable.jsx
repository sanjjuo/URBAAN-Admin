import React from 'react'
import { Button, Card, CardFooter, Chip, IconButton, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["ID", "Customer", "Address", "Delivery Date", "Product", "Size", "Payment", "Status"];

const TABLE_ROWS = [
  {
    id: "0001",
    customer: "Alex",
    address: "089 Kutch Green Apt.448",
    deliveryDate: "14 Feb 2024",
    product: "Kurti",
    size: "S",
    payment: "COD",
    status: "delivered"
  },
  {
    id: "0002",
    customer: "Christina",
    address: "089 Ernakulam Apt.448",
    deliveryDate: "14 June 2024",
    product: "Bottom",
    size: "XL",
    payment: "Razorpay",
    status: "processing"
  },
  {
    id: "0003",
    customer: "John",
    address: "089 Malappuram Apt.448",
    deliveryDate: "26 Aug 2024",
    product: "Night Wear",
    size: "L",
    payment: "Razorpay",
    status: "cancelled"
  },
  {
    id: "0004",
    customer: "Lakshmi",
    address: "089 Trivandrum Apt.448",
    deliveryDate: "06 Sep 2024",
    product: "Jeans",
    size: "M",
    payment: "COD",
    status: "shipped"
  },
  {
    id: "0005",
    customer: "Seetha",
    address: "089 Kozhikode Apt.448",
    deliveryDate: "14 Nov 2024",
    product: "Kurti",
    size: "2XL",
    payment: "card",
    status: "pending"
  },
];

const OrderTable = () => {
  return (
    <>
      <Card className="h-full w-full shadow-none bg-transparent">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr className='bg-white'>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 p-4"
                >
                  <Typography
                    variant="small"
                    className="font-semibold font-custom text-secondary leading-none text-base uppercase"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((item, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-custom text-secondary"
                    >
                      {item.id}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-custom text-secondary"
                    >
                      {item.customer}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-custom text-secondary"
                    >
                      {item.address}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-custom text-secondary"
                    >
                      {item.deliveryDate}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-custom text-secondary"
                    >
                      {item.product}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-custom text-secondary"
                    >
                      {item.size}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-custom text-secondary"
                    >
                      {item.payment}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Chip
                      className={`
                    ${item.status === "delivered" ? "text-deliveredBg bg-deliveredBg/20 capitalize text-sm text-center font-normal" : ""}
                    ${item.status === "processing" ? "text-processingBg bg-processingBg/20 capitalize text-sm text-center font-normal" : ""}
                    ${item.status === "cancelled" ? "text-cancelBg bg-cancelBg/20 capitalize text-sm text-center font-normal" : ""}
                    ${item.status === "shipped" ? "text-shippedBg bg-shippedBg/20 capitalize text-sm text-center font-normal" : ""}
                    ${item.status === "pending" ? "text-pendingBg bg-pendingBg/20 capitalize text-sm text-center font-normal" : ""}
                    ${!["delivered", "processing", "cancelled", "shipped", "pending"].includes(item.status) ? "text-gray-500 bg-gray-200 capitalize text-sm text-center font-normal" : ""}
                  `}
                      value={
                        item.status === "delivered" ? "Delivered" :
                          item.status === "processing" ? "Processing" :
                            item.status === "cancelled" ? "Cancelled" :
                              item.status === "pending" ? "Pending" :
                                item.status === "shipped" ? "Shipped" : "Unknown"
                      }

                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm" className='font-custom border-gray-300 font-normal capitalize 
                    text-sm cursor-pointer hover:bg-black hover:text-white'>
            Prev. Date
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
            Next Date
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default OrderTable