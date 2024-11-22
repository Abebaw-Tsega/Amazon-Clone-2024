import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from './components/Pages/Landing/Landing'
import Signup from './components/Pages/Auth/Signup'
import Payment from './components/Pages/Payment/Payment'
import Orders from './components/Pages/Orders/Orders'
import Cart from './components/Pages/Cart/Cart'



function Routing () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Signup/>} />
        <Route path='/payments' element={<Payment/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
    </Router>
  )
}

export default Routing