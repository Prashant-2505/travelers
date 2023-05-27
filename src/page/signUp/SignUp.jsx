import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase'
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import SignUpSvg from '../../assets/svg/signUp.svg'
import './style.css'
const SignUp = () => {
  
    
    const navigate = useNavigate()


    const [formData, SetFormData] = useState({
      name:"",
      email: "",
      password: "",
    });
    const { name,email, password } = formData;
  
  
    function onChange(e) {
      SetFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  
    // function for from submitting using firebase auth read doc for understand how to use
    async function onSubmit(e)
    {
       e.preventDefault()
  
       try {
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(auth,email,password)
  
        updateProfile (auth.currentUser,{
          displayName : name
        })
        const user = userCredential.user
        const formDataCopy = {...formData}
        delete formDataCopy.password
        // used firebase method to give of user register
        formDataCopy.timestamp = serverTimestamp()
  
        await setDoc(doc(db, 'users',user.uid), formDataCopy)
        alert("Sign-up sucessfulyy")
        navigate('/')
       } 
       catch (error) {
        alert("something went wrong")
       }
    }
  

    return (
        <div className='SignInDiv' style={{ backgroundImage: `url(${SignUpSvg})`, height: '100vh', paddingTop: '5rem' }}>
            <div className="SignInform">
                <form onSubmit={onSubmit} >
                <input type="text" placeholder='User name' name="" id="name" value={name} onChange={onChange
                    } />
                    <input type="email" placeholder='Email' name="" id="email" value={email} onChange={onChange
                    } />
                    <input type="text" placeholder='password' id='password' value={password} onChange={onChange
                    } />

                    <div>
                        <button className="submitBtn" type='submit'>Sign-Up</button>
                    </div>
                   
                </form>
            </div>
        </div>
    )
  
}

export default SignUp
