import React, { useState } from 'react'
import Card from './Card'

const Newsapp = () => {
  const[search,setSearch] = useState()
  const[newsData,setNewsData] = useState()
  const API_KEY = "9c3ed8ee95884dec979460a60f96675b";

  const getData = async() =>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
    const jsonData =await response.json();
    console.log(jsonData.article);
    setNewsData(jsonData.article)
  }

  const handleInput = (e) =>{
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a>All news</a>
          <a>Trending</a>
        </ul>
        <div className='searchbar'>
            <input type="text" placeholder='Search News' onChange={handleInput}/>
            <button onClick={getData}>Search</button>
        </div>
      </nav>
<div>
  <p className='head'>Stay Update with TrendyNews</p>
</div>
      <div className="categoryBtn">
        <button>Sports</button>
        <button>politics</button>
        <button>Entertainment</button>
        <button>Health</button>
        <button>Fitness</button>
      </div>
      <div>
        {newsData? <Card data={newsData}/> : null}
        
      </div>
    </div>
  )
}

export default Newsapp
