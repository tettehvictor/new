import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Product = () => {
    const image ='https://images.pexels.com/photos/2285500/pexels-photo-2285500.jpeg?auto=compress&cs=tinysrgb&w=400'
    const image1 = 'https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=400'
    const image2 = 'https://images.pexels.com/photos/1858407/pexels-photo-1858407.jpeg?auto=compress&cs=tinysrgb&w=400'    
    const image3 = 'https://images.pexels.com/photos/2918534/pexels-photo-2918534.jpeg?auto=compress&cs=tinysrgb&w=400'
    const image4 = 'https://images.pexels.com/photos/186035/pexels-photo-186035.jpeg?auto=compress&cs=tinysrgb&w=400'
    const image5 = 'https://images.pexels.com/photos/977908/pexels-photo-977908.jpeg?auto=compress&cs=tinysrgb&w=400'
    const image6 = 'https://images.pexels.com/photos/345415/pexels-photo-345415.jpeg?auto=compress&cs=tinysrgb&w=400'
    const image7 = 'https://images.pexels.com/photos/6594253/pexels-photo-6594253.jpeg?auto=compress&cs=tinysrgb&w=400'
    const image8 = 'https://images.pexels.com/photos/12484292/pexels-photo-12484292.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=1'
    const image9 = 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400'
  return (
    <>
    <Navbar/>
   <div className="d-flex flex-wrap gap-5">
   <Card img={image} tit='shoes' des='comfortable' price="74930"/>
    <Card img={image1}  tit='shoes' des='comfortable' price="4930"/>
    <Card img={image2}  tit='shoes' des='comfortable' price="7493"/>
    <Card img={image3} tit='shoes' des='comfortable' price="7430"/>
    <Card img={image4}  tit='shoes' des='comfortable' price="740"/>
    <Card img={image5}  tit='shoes' des='comfortable' price="730"/>
    <Card img={image6}  tit='shoes' des='comfortable' price="930"/>
    <Card img={image7}  tit='shoes' des='comfortable' price="740"/>
    <Card img={image8}  tit='shoes' des='comfortable' price="30"/>
    <Card img={image9}  tit='shoes' des='comfortable' price="8930"/>
   </div>
    </>
  )
}

export default Product