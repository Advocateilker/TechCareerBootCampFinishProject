import {useNavigate } from "react-router-dom";
import Card from '../components/Card';


const ListView = ({events,user}) => {

  const navigate=useNavigate()

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