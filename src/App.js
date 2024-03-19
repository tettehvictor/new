import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Product from './pages/Product'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/log' element={<Login/>}/>
    <Route path='/sign' element={<Signup/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App