import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/nav'

function Details() {
const apiKey = "41a16864387c44008fc23fe080925931";
let params=useParams()   
const [detail,setDetail]=useState({})


const getDetails=async()=>{
try{
const res=await fetch(`https://api.rawg.io/api/games/${params.name}?key=${apiKey}`)
const data=await res.json()
setDetail(data)
console.log(data)
}
catch(err){
    
}

}

useEffect(()=>{
    getDetails(params.name);
},[params.name])



  return (
    <div>
        <Nav/>
        <div className='detail'>
        <h3> {detail.name}</h3>
     <img src={detail.background_image} alt="" />
     <h3>Released date : {detail.released}</h3>
     <h3>Rating:{detail.rating}</h3>
     
     <h3>{detail.parent_platforms && detail.parent_platforms.length > 0 ? (
          detail.parent_platforms.map((play, index) => (
          <span key={play.id}>{index > 0 && ', '}{play.platform.name}</span>     
          ))
        ) : (
          <p>No platform information available</p>
        )}</h3>
     <p>{detail.description_raw}</p>
  
        </div>
    </div>
  )
}

export default Details



