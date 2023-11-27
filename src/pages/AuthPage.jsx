import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import {  useState } from 'react'
import { auth, provider } from '../firebase/config'
import {useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { onAuthStateChanged } from "firebase/auth";


const AuthPage = ({setAuthNow,setUserNow}) => {

    const navigate=useNavigate()

    const [user,setUser]=useState()

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        navigate("/home")
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                setAuthNow(true)
                setUserNow(auth.currentUser)
                navigate("/home")
                toast.success("Başarılı Şekilde Giriş Yapıldı.")
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