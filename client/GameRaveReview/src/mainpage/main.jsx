import React, { useEffect, useState } from 'react'
import { useCartContext } from '../pages/cartcontent'
import { Link } from 'react-router-dom'

function Main() {
  const { cart, addToCart } = useCartContext()
const apiKey="41a16864387c44008fc23fe080925931"
const url=`https://api.rawg.io/api/games?key=${apiKey}`
const [games,setGames]=useState([])

const getGame=async()=>{
    try{
  const res=await fetch(url)
  const data=await res.json()
  const shuffledGames = shuffleArray(data.results);
  const limitData=shuffledGames.slice(0,6)
  setGames(limitData)
  console.log(data.results)
    }
    catch(err){
        console.log("error", err)
    }
}


useEffect(()=>{
    getGame();
},[])


const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};


  return (
    <div >
      <h2>Popular Picks</h2>
     <div className='Game'>
     {games.map((game)=>(
      <div key={game.id} className="Games">
       <Link to={'/details/' + game.id}> <img src={game?.background_image} alt="" loading='lazy' /></Link>
        <div className='content'>
        <h2>{game?.name}</h2>
       <h3>Genre: {game?.genres.map((genre,index)=>(  
        <span key={genre.id}>{index > 0 && ','}{genre.name}</span>
      ))}</h3>
      <h3>Rating: {game?.rating}/5</h3>
      <h3>Total Playtime: {game?.playtime}hrs</h3>
        </div>
      
        <div className='favourite'>
      <button onClick={()=>addToCart(game)} className="fav-btn"><i className="bi bi-heart"></i></button>
      </div>
      
      </div>
     ))} 
     </div>
    
     
    </div>
  )
}

export default Main
