import React from 'react'

const AddProduct = () => {
    return (
        <>
            <h1 className='text-2xl lg:text-3xl font-semibold'>Create Product</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-5">
                <div className='bg-white rounded-xl shadow-md'>
                    <div className='p-5'>
                        <h2 className="text-xl font-medium mb-3 lg:mb-0 text-secondary">Product Information</h2>
                    </div>
                    <hr />
                    <div className='p-5'>
                        <h1>product title</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct
