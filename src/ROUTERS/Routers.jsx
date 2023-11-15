import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Products from '../PAGES/Products/Products'
import ProductDetails from '../PAGES/ProductDetails/ProductDetails'
import App from '../App'
const AppRouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
            <Route path='' element={<Products/>}/>
            <Route path="product-details/:id" element={<ProductDetails/>}/>
        </Route>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouterProvider