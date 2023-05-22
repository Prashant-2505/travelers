import React from 'react'
import { CButton, CCarousel } from '@coreui/react';
import { CCarouselItem } from '@coreui/react'
import { CCarouselCaption } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';
import './style.css'
import API from '../../apiHelper/dummyApi'

const Carousel = () => {
    return (
        <div className='main'>
            <CCarousel className='' controls indicators >
                {API.map((index) => (
                    <CCarouselItem className='slides' key={index.id}>
                        <img className='Cimg' src={index.url} alt="" />
                        <div className="data">
                            <p>package start from $500</p>
                            <h1 >{index.name}</h1>
                            <button className="btn">Discover more.</button>
                        </div>
                    </CCarouselItem>
                ))}
            </CCarousel>
        </div>
    )
}

export default Carousel
