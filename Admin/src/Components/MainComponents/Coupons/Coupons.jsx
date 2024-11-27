import React from 'react'
import CouponsSearchBar from './CouponsSearchBar'
import CouponsTable from './CouponsTable'
import { Button } from '@material-tailwind/react'
import { FaPlus } from 'react-icons/fa6'
import { useContext } from 'react'
import { AppContext } from '../../../StoreContext/StoreContext'
import { AddCouponModal } from './AddCouponModal'

const Coupons = () => {
  const { open, handleOpen } = useContext(AppContext)
  return (
    <>
      <h1 className="text-2xl lg:text-3xl font-semibold">Coupons</h1>
      <div className='space-y-5 mt-5'>
        <div className='flex items-center gap-2'>
          <CouponsSearchBar />
          <Button onClick={()=>handleOpen("addCouponModal")} className='flex items-center gap-1 bg-buttonBg font-custom font-normal'><FaPlus />Add Coupon</Button>
        </div>
        <div>
          <CouponsTable />
        </div>
      </div>

      <AddCouponModal open={open === "addCouponModal"} handleOpen={handleOpen}/>
    </>
  )
}

export default Coupons
