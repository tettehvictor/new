import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const submit = (e) => {
    e.preventDefault()
    const data = { email, password}
    console.log(data)
}
  return (
   <>
   <Navbar/>
  <div  className='d-flex align-items center justify-content-center align-items-center vh-100'>
  <form onSubmit={submit} action="" className='border rounded bg-light p-5 '>
    <div className='d-flex justify-content-center align-items-center my-3'>
    <label htmlFor="">Email:</label>
    <input 
    value={email} 
    type="email" 
    onChange={(e) => setEmail(e.target.value)}
    placeholder='Enter your  email' />
    </div>
   <div className='d-flex justify-content-center align-items-center my-3'>
   <label htmlFor="">Password:</label>
    <input 
    value={password} 
    type="password" 
    onChange={(e) => setPassword(e.target.value)}
    placeholder='Enter your password' />
   </div>
   <button className='btn btn-primary w-100 my-3'>Submit</button>
   </form>
  </div>
   </>
  )
}

export default Login