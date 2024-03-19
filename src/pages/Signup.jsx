import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
const Signup = () => {
   const [fullName, setFullName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [password, setPassword] = useState('')

   const submitForm = (e) => {
        e.preventDefault()
        const formData = {fullName, email, phone, password}
        console.log(formData)
   }
  return (
    <>
    <div className="form-containers d-flex justify-content-center align-items-center vh-100">
        <form onSubmit={submitForm} action="" className='border rounded bg-light p-5 '>
            <h2 className='text-center text-secondary'>Sign-up</h2>
            <div className='inputs-container my-3 '>
                <label htmlFor="">Fullname:</label>
                <input 
                value={fullName} 
                className=' bg-white ' 
                onChange={(e) => setFullName(e.target.value)}
                type="text" 
                placeholder='Enter your fullname' />
            </div>

            <div className='inputs-container my-3'>
                <label htmlFor="">Email</label>
                <input 
                value={email} 
                className=' bg-white' 
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder='Enter your Email address' />
            </div>

            <div className='inputs-container my-3'>
                <label htmlFor="">Phone:</label>
                <input 
                value={phone} 
                className=' bg-white'
                onChange={(e) => setPhone(e.target.value)} 
                type="tel" 
                placeholder='Enter your Phone' />
            </div>

            <div className='inputs-container my-3'>
                <label htmlFor="">Password:</label>
                <input 
                value={password} 
                className=' bg-white'
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder='Enter your password' />
            </div>

            <div className="button-container my-3">
                <button className='btn btn-primary w-100'>Sign-up</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Signup