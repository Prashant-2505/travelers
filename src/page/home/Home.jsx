import React from 'react'
import Craousel from '../../components/craousel/Craousel'
import './style.css'
import Banner from '../../components/banner/Banner'
import Hero from '../../components/hero/Hero'
const Home = () => {
  return (
    <div className='Home'>
       <Craousel/>
        <Banner/>
        <Hero/>
    </div>
  )
}

export default Home
