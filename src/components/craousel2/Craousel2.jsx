import React from 'react'
import './style.css'
import { CButton, CCarousel } from '@coreui/react';
import { CCarouselItem } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';
const Craousel2 = () => {
    return (
        <div>
            <CCarousel className='CCarousel' controls dark>
                <CCarouselItem>
                    <div className="a">
                        <div className="parent">
                            <img src="https://images.unsplash.com/photo-1559734840-f9509ee5677f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" className="parent-img" />
                            <div className="child">
                                <div className="heading">
                                    <h4>Family</h4>
                                    <p>Explore incredible deal</p>
                                    <p>on family tour</p>
                                </div>
                                <p>Plan your next family adventure with us! Our travel site offers a wide range of family-friendly tours, from theme park vacations to beach getaways.</p>
                                <button className='craousel-btn' >explore vacations</button>
                            </div>
                        </div>
                    </div>
                </CCarouselItem>
                <CCarouselItem>
                    <div className="a">
                        <div className="parent">
                            <img src="https://images.unsplash.com/photo-1537694513497-5f0b0ec361c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHdpbGRsaWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className="parent-img" />
                            <div className="child">
                                <div className="heading">
                                    <h4>Wildlife</h4>
                                    <p>Explore wide range</p>
                                    <p>of wildlife package</p>
                                </div>
                                <p>Get up close and personal with some of the world's most magnificent creatures on one of our wildlife tours. Our expert guides will lead you on an unforgettable journey, sharing their knowledge and insights along the way.</p>                           <button className='craousel-btn' >explore vacations</button>
                            </div>
                        </div>
                    </div>
                </CCarouselItem>
                <CCarouselItem>
                    <div className="a">
                        <div className="parent">
                            <img
                                src="https://images.unsplash.com/photo-1453775910522-5d45ac4f0eae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHJvbWFudGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className="parent-img" />
                            <div className="child">
                                <div className="heading">
                                    <h4>Romantic</h4>
                                    <p>Romantic gateway </p>
                                    <p>around the world</p>
                                </div>
<p>Escape with your loved one on a romantic journey to some of the world's most enchanting destinations. Our travel site offers a range of romantic tours, from city breaks to beach getaways, designed to inspire passion and create unforgettable memories.</p>                                <button className='craousel-btn' >explore vacations</button>
                            </div>
                        </div>
                    </div>
                </CCarouselItem>
            </CCarousel>
        </div>
    )
}

export default Craousel2
