import React from 'react'
import Craousel from '../../components/craousel/Craousel'
import './style.css'
import Banner from '../../components/banner/Banner'
import Hero from '../../components/hero/Hero'
import TopDestination from '../../components/topDestination/TopDestination'
import Craousel2 from '../../components/craousel2/Craousel2'
const Home = () => {
  return (
    <div className='Home'>
       <Craousel/>
        <Banner/>
        <Hero/>
        <TopDestination/>
        <Craousel2/>
    </div>
  )
}

export default Home
