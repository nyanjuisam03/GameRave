import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const [searched, setSearched] = useState('');
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearched(e.target.value);
    
  };

  const submitHandler=(e)=>{
    e.preventDefault()
    navigate("/searched/" + searched);
  }

 

  return (
    <div >
      <nav className='navigation'>
        <Link to='/'><h1>GameRaveReview</h1></Link>
        <input
          type='text'
          placeholder='Search'
          value={searched}
          onChange={handleChange}
         
        />
        <button onClick={submitHandler} className="search">Search</button>
        <ul>
          <li><Link to='/genre'>Genre</Link></li>
          <li><Link to='/top-rated'>Top Rated</Link></li>
          
          
          <li><Link to='/game-reviews'>Game Reviews</Link></li>
        </ul>
        <div className='folder'>
          <Link to='/cart'><i className="bi bi-archive"></i></Link>
          
        </div>
      </nav>
    </div>
  );
}

export default Nav;
