import React from 'react'
import Nav from '../components/nav'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../pages/cartcontent'
import { Link } from 'react-router-dom';

function Searching() {
    const { cart, addToCart } = useCartContext()
    const apiKey = "41a16864387c44008fc23fe080925931";
    const [searchedGame,setSearchedGame]=useState([])
    let params=useParams()
    
    const getSearched = async (name) => {
        try {
         const res=await fetch(`https://api.rawg.io/api/games?search=${name}&key=${apiKey}`)
          const data=await res.json()
          const limitedGames = data.results.slice(0, 9)
          setSearchedGame(limitedGames)
          console.log(data.results)
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      };
useEffect(()=>{
    getSearched(params.detail)
},[params.detail])



  return (
    <div>
<Nav/>


<div className='Game'>
{searchedGame.map((search)=>(
    
      
      <div key={search.id} className="Games">
        <img src={search?.background_image} alt="" />
      <h2>{search?.name}</h2>
      <h3>Genre: {search?.genres.map((genre,index)=>(
          
        <span key={genre.id}>{genre.name}{index > 0 && ', '}</span>
  
      ))}</h3>
      <h3>Rating: {search?.rating}/5</h3>
      <h3>Total Playtime: {search?.playtime}hrs</h3>
      <button onClick={()=>addToCart(search)}><i className="bi bi-heart"></i>Add to Collection</button>
      <button><Link to={'/details/' + search.id}>More Info</Link></button>
      </div>
    
  
))}
</div>
    </div>
  )
}

export default Searching
