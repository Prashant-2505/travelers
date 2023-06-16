import React from 'react'
import {  CCarousel } from '@coreui/react';
import { CCarouselItem } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';
import './style.css'
import API from '../../apiHelper/CraouselApi'
import { Link } from 'react-router-dom';

const Carousel = () => {

   
      


    return (
        <div className='main'>
            <CCarousel className='' controls indicators >
                {API.map((index) => (
                    <CCarouselItem className='slides' key={index.id}>
                        <img className='Cimg' src={index.url} alt="" />
                        <div className="data">
                            <p>package start from {index.price}</p>
                            <h1 >{index.name}</h1>
                            <Link to = {`/packages/${index.collection}`}>
                            <button className="btn">Discover more.</button>
                            </Link>
                        </div>
                    </CCarouselItem>
                ))}
            </CCarousel>
        </div>
    )
}

export default Carousel
