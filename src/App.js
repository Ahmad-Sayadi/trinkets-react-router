import React,{useState,useEffect} from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import data from "./data"
import Home from './components/Home'
import ItemsList from './components/ItemsList'
import Item from './components/Item'
import "./styles.css"

function App() {
  const [item ,setItem] =useState(data)
 
  return (
    <div className="App">
        <nav>
        <h1 className="store-header">Ahmad's</h1>
        <div className="nav-links" >
          <Link to="/">Home</Link> 
          <Link to="/item">Shop</Link>
         
          </div>
        </nav>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/item/" element={<ItemsList item={item}/>}/>
        <Route path='/item/:id' element={<Item/>}/>
        
      </Routes>
    </div>
  )
}

export default App
