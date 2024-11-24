import React from 'react'
import CouponsSearchBar from './CouponsSearchBar'
import CouponsTable from './CouponsTable'

const Coupons = () => {
  return (
    <>
      <h1 className="text-2xl lg:text-3xl font-semibold">Coupons</h1>
      <div className='space-y-5 mt-5'>
        <div>
          <CouponsSearchBar/>
        </div>
        <div>
        <CouponsTable/>
        </div>
      </div>
    </>
  )
}

export default Coupons
