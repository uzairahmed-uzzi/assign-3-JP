import React,{useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Products from '../PAGES/Products/Products'
import ProductDetails from '../PAGES/ProductDetails/ProductDetails'
import Login from '../PAGES/Login/Login'
import Signup from '../PAGES/Signup/Signup'
import {useAuthContext} from '../Context/Auth'
const AppRouterProvider = () => {
  const {auth}=useAuthContext();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
           {auth && <Route path='dashboard' element={<Products/>}/>}
            <Route path="" element={<Login />}/>
            <Route path="signup" element={<Signup />}/>
            <Route path="product-details/:id" element={<ProductDetails/>}/>

        </Route>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouterProvider