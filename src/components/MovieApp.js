import React, { useState } from 'react'
import "./MovieApp.css"
import { AiOutlineSearch } from "react-icons/ai";

function MovieApp() {

    const[searchQuery,setSearchQuery] = useState("")

    const handleSearchChange =(event)=>{
        setSearchQuery(event.target.value)
    }

  return (
    <div>
        <h1>movieApp</h1>
        <div className='search-bar'>
            <input type='text' placeholder='Search movies...' value={searchQuery} onChange={handleSearchChange} className='search-input'></input>
            <button onClick="" className='search-button'><AiOutlineSearch /></button>
            
        </div>
    </div>
  )
}

export default MovieApp