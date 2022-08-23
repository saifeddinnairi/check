import React, { useState } from 'react'
import Item from './Item';
import Navbar from './Navbar';
import './MovieList.css';

// import { FaTrailer } from 'react-icons/fa';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Add from './Add'
import Desc from './Desc';
function MovieList() {

    const [movies,setMovie]=useState(
           [
              {name:<h2>jhon wick 1</h2>,
              image:"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
              desc:"Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.",
              trailer:<iframe width="856" height="500" src="https://www.youtube.com/embed/C0BMx-qxsP4" title="John Wick Official Trailer #1 (2014) - Keanu Reeves, Willem Dafoe Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              },

              {name:<h2>creed</h2>,
              image:"https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg",
              desc:"Adonis Johnson, the son of heavyweight champion Apollo Creed, embraces his legacy as a boxer and seeks mentorship from Rocky Balboa, his father's old friend and rival.",
              trailer: <iframe width="856" height="500" src="https://www.youtube.com/embed/Uv554B7YHk4" title="Creed - Official Trailer [HD]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            
            
            },
           ])

           return (
            <div >
              <Navbar></Navbar>
                    <>
                      <BrowserRouter >
                      <Routes >
                        <Route path='/' element={
                          <>
                <Add movies={movies} setMovie={setMovie}></Add>
                <div className='MovieList'>
                {movies.map((e,index)=>(
                      <NavLink to={"/"+index}> 
                        <Item  movies={movies} setMovie={setMovie} key={index} name={e.name} image={e.image} rate={e.rate} ></Item>
                      </NavLink>
                      ))}
                      </div>
                          </>
                        }>
                        </Route>
                        
             <Route path='/:id' element={ <Desc  movies={movies} ></Desc>  }></Route>
                    </Routes>
                  </BrowserRouter>
                  </>
        
           
            </div>
  );
    
    
   
}

export default MovieList