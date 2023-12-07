import React from 'react'
import { useNavigate } from 'react-router-dom'


const ToAuthPage = () => {
    const navigate=useNavigate()
    return (
        <div className='noauth'  >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90%', marginTop: '88px' }}>
                Yetkisiz Sayfadasınız Lütfen Giriş Yapmak İçin{' '}
                <span style={{ color: 'red', textDecoration: 'underline' }} onClick={() => navigate('/')}>
                    Tıklayınız
                </span>{' '}
            </div>
        </div>
    )
}

export default ToAuthPage