import React from 'react'
import './style.css'
import { AiTwotoneStar } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'

const CustomerReview = () => {
    return (
        <div className='review'>
            <h3>customer reviews</h3>
            <p>Read testimonials from our happy customers</p>

            <div className="R-card">
                <div className="review-card">
                    <div className="customer-data">
                        <div className="customer-img">
                            <BsFillPersonFill className='customer' />
                        </div>
                        <div className="customer-name">
                            <p>Monu malik</p>
                            <p>Teacher</p>
                            <p>
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                            </p>
                        </div>
                    </div>
                    <div className="customer-review">
                        The designed tour is so amazing
                    </div>
                </div>

                <div className="review-card">
                    <div className="customer-data">
                        <div className="customer-img">
                            <BsFillPersonFill className='customer' />
                        </div>
                        <div className="customer-name">
                            <p>Monu malik</p>
                            <p>Teacher</p>
                            <p>
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                            </p>
                        </div>
                    </div>
                    <div className="customer-review">
                        The designed tour is so amazing
                    </div>
                </div>

                <div className="review-card">
                    <div className="customer-data">
                        <div className="customer-img">
                            <BsFillPersonFill className='customer' />
                        </div>
                        <div className="customer-name">
                            <p>Monu malik</p>
                            <p>Teacher</p>
                            <p>
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                            </p>
                        </div>
                    </div>
                    <div className="customer-review">
                        The designed tour is so amazing
                    </div>
                </div>

                <div className="review-card">
                    <div className="customer-data">
                        <div className="customer-img">
                            <BsFillPersonFill className='customer' />
                        </div>
                        <div className="customer-name">
                            <p>Monu malik</p>
                            <p>Teacher</p>
                            <p>
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                            </p>
                        </div>
                    </div>
                    <div className="customer-review">
                        The designed tour is so amazing
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CustomerReview
