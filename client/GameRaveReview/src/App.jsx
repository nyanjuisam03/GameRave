import { useState } from 'react'
import Home from './pages/home'
import Categories from './pages/genre'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Searching from './pages/search'
import Details from './pages/detail'
import Cart from './pages/cart'
import { CartProvider } from './pages/cartcontent'

function App() {
  

  return (
    <>
     <CartProvider>
     <BrowserRouter>
     <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/genre' element={<Categories/>}></Route>
<Route path='/searched/:detail' element={<Searching/>}></Route>
<Route path='/details/:name' element={<Details/>}></Route>
 <Route path='/cart' element={<Cart/>}></Route> 
     </Routes>
     </BrowserRouter>
     </CartProvider>
    </>
  )
}

export default App
