import React from 'react'
import SignUpSvg from '../../assets/svg/signUp.svg'
import './style.css'
const SignIn = () => {
    return (
        <div className='SignInDiv' style={{ backgroundImage: `url(${SignUpSvg})`, height: '100vh', paddingTop: '5rem' }}>
            <div className="SignInform">
                <form action="" >
                    <input type="email" placeholder='Email' name="" id="email" />
                    <input type="text" placeholder='password' id='password' />
                </form>
                <div>
                    <button className="submitBtn">Sign-in</button>
                </div>
                <div className="signUp">
                    <p>Don't have an account?</p>
                    <p>sign-up</p>
                </div>
            </div>
        </div>
    )
}

export default SignIn
