import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase/config'
import {useNavigate } from "react-router-dom";

const AuthPage = ({setAuth,setUser}) => {

    const navigate=useNavigate()

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                setAuth(true)
                setUser(auth.currentUser)
                navigate("/feed")
            })
            .catch((err) => console.log(err))

    }

    
    return (
        <div className='container'>
            <div className='auth'>
                <h1>BİLET EDİN</h1>
                <p>Devam Etmek İçin Giriş Yapınız</p>
                <button onClick={handleLogin}>
                    <img src="./google.png" alt="" />
                    <span>Sign in with Google</span>
                </button>
            </div>

        </div>
    )
}

export default AuthPage