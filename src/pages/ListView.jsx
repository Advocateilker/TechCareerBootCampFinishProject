import axios from 'axios';
import {useState,useEffect} from 'react'
import {useNavigate } from "react-router-dom";
import Card from '../components/Card';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/config';


const ListView = ({authNow,userNow}) => {

  const navigate=useNavigate()
  const [events,setEvents]=useState([])
  const [user,setUser]=useState()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });



  useEffect(()=>{
    axios.get("http://localhost:3038/events")
    .then((res)=>setEvents(res.data))
    .catch((err)=>console.log(err))


  },[])
  
  console.log(events)
 
  if(user){
    return(
      <div className='card-container'>

        {events?.map((i)=><Card key={i.id} i={i}/>)}
      

      </div>
    )
  }

  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center", height:"90%",marginTop:"88px"}}>Yetkisiz Sayfadasınız Lütfen Giriş Yapmak İçin  <span
    style={{color:"red",textDecoration:"underline"}}
    onClick={()=> navigate("/")} >Tıklayınız</span> </div>
  )
}

export default ListView