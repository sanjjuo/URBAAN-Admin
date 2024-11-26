import React from 'react';
import Home from './Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/MainComponents/DashBoard/DashBoard'
import SubCategory from './Components/MainComponents/SubCategory/SubCategory'
import OrderList from './Components/MainComponents/OrderList/OrderList'
import Coupons from './Components/MainComponents/Coupons/Coupons'
import UsersList from './Components/MainComponents/UsersList/UsersList'
import Invoice from './Components/MainComponents/Invoice/Invoice'
import AddProduct from './Components/MainComponents/Products/AddProduct'
import Category from './Components/MainComponents/Category/Category'
import Products from './Components/MainComponents/Products/Products'
import ScrollToTop from './ScrollToTop';
import ViewUserDetails from './Components/MainComponents/UsersList/ViewUserManagement';

const FullRoutes = () => {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Home />}>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='product' element={<Products />} />
                        <Route path='category' element={<Category />} />
                        <Route path='subcategory' element={<SubCategory />} />
                        <Route path='orderlist' element={<OrderList />} />
                        <Route path='coupon' element={<Coupons />} />
                        <Route path='userslist' element={<UsersList />} />
                        <Route path='invoice' element={<Invoice />} />
                        <Route path='addProduct' element={<AddProduct />} />
                        <Route path='userDetails' element={<ViewUserDetails/>}/>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default FullRoutes
