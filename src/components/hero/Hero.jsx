import React from 'react'
import './style.css'
import {BsArrowRightCircleFill} from 'react-icons/bs'


const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-image-div">
                <img className='hero-image' src="https://media.istockphoto.com/id/1141196125/photo/hiking-in-the-allgaeu-alps.jpg?b=1&s=170667a&w=0&k=20&c=TQF-GqLyM0jEtlSKEp-vjHr5mX8GpTrTyMrLWFKSFEI=" alt="" />
            </div>
            <div className="hero-data">
                <div className="heading">
                    <h3>Travelers specializes in</h3>
                    <h3>small <span className='heading-span'>group vacations</span></h3>
                </div>
                <div className="para">
                    <p><BsArrowRightCircleFill className='para-icon'/>A good traveler has no fixed plans</p>
                    <p> an unexpectes plans always</p>
                    <p> bring thrills in boring life</p>
                </div>
                <div className="para">
                    <p><BsArrowRightCircleFill className='para-icon'/>Places to stay around INDIA</p>
                    <p> India is most diverst country</p>
                    <p> there is may gems to go .</p>
                </div>
                <div className="hero-buttons">
                    <button className='btn-1'>about company</button>
                    <button className='btn-2'>discover tour</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
