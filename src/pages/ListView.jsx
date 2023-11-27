import axios from 'axios';
import {useState,useEffect} from 'react'
import {useNavigate } from "react-router-dom";
import Card from '../components/Card';

const ListView = ({auth,user}) => {

  const navigate=useNavigate()
  const [events,setEvents]=useState([])


  console.log(user,auth)

  useEffect(()=>{
    axios.get("http://localhost:3038/events")
    .then((res)=>setEvents(res.data))
    .catch((err)=>console.log(err))


  },[])
  
  console.log(events)
 
  if(auth){
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