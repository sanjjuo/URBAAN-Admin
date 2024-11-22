import React from 'react'
import "./App.css"
import Home from './Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/AppRoutes/DashBoard/DashBoard'
import SubCategory from './Components/AppRoutes/SubCategory/SubCategory'
import OrderList from './Components/AppRoutes/OrderList/OrderList'
import Coupons from './Components/AppRoutes/Coupons/Coupons'
import UsersList from './Components/AppRoutes/UsersList/UsersList'
import Invoice from './Components/AppRoutes/Invoice/Invoice'
import AddProduct from './Components/AppRoutes/Products/AddProduct'
import Category from './Components/AppRoutes/Category/Category'
import Products from './Components/AppRoutes/Products/Products'

const App = () => {
  return (
    <>
      <Router>
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
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
