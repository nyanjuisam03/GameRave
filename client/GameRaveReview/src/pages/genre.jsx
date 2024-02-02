import { Category } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
function Categories() {
 
const apiKey="41a16864387c44008fc23fe080925931"
const url=`https://api.rawg.io/api/genres?key=${apiKey}`
const [genre,setGenre]=useState([])


const getGenre=async()=>{
     try{
 const res=await fetch(url)
 const data=await res.json()
 setGenre(data.results)
 console.log(data.results)
 }
 catch(err){
     alert("error")
}
 }

useEffect(()=>{
 getGenre()
},[])
  return (
    
    <div >
        <Nav/>
        <div className='Game'>
     {genre.map((catergory)=>(
           <div className="Games">
      <h2>{catergory?.name}</h2>
      <img src={catergory.image_background} alt="" />
      <div>
</div>
           </div>

     ))}
</div>
    </div>
  )
}

export default Categories
