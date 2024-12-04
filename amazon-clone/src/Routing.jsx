import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from './components/Pages/Landing/Landing'
import Auth from './components/Pages/Auth/Auth'
import Payment from './components/Pages/Payment/Payment'
import Orders from './components/Pages/Orders/Orders'
import Cart from './components/Pages/Cart/Cart'
import Results from "./components/Pages/Results/Results"
import ProductDetail from './components/Pages/ProductDetail/ProductDetail'

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QRKtPKxM1Al6esKhO7mGkR14vDGxmmW5Az7Zm55PvJ5N7uV1r8xZKU6PCKNM5QPTLk4Hrrh6rjARJNEB61Ctr7x00uKHdsHC6');


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/payment' element={

          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        } />
        <Route path='/orders' element={<Orders />} />
        <Route path='/category/:categoryName' element={<Results />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
    </Router>
  )
}

export default Routing