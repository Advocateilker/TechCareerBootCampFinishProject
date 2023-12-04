import React from 'react'
import { useNavigate } from 'react-router-dom'


const ToAuthPage = () => {
    const navigate=useNavigate()
    return (
        <div>
            <div className='to-auth-page' >
             <span>  Yetkisiz Sayfadasınız Lütfen Giriş Yapmak İçin</span> 
             <span onClick={() => navigate('/')}>
                      Tıklayınız
                </span>
                  

            </div>
        </div>
    )
}

export default ToAuthPage