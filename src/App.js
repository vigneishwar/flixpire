import React from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?apikey=a50a0a17';

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);

  }

  useEffect(()=> {
    searchMovies();
  }, [])


  return(
    <div className='app'>
      <h1>FlixPire</h1>
      <div className='search'>
        <input 
        placeholder='Search for movies...'
        value='Superman'
        onChange={()=>{}}
        />
        <img src={SearchIcon} 
        alt='Search Icon'
        onClick={()=>{}}
        />
      </div>

    </div>
  );
};

export default App;
