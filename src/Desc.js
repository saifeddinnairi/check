import React from 'react'
import {useParams} from 'react-router-dom'
import './Desc.css'

function Desc({movies}) {

    const {id} = useParams()
    const movie = movies.find((mv,idx)=>idx === +id)
  return (
    <div className='test'  >
       <img src={movie.image}></img>
       <p className='Title'>{movie.name}</p>
       <span>{movie.rate}</span>
       <p className='Desc'>{movie.desc}</p>
       {movie.trailer}
    </div>
  )
}

export default Desc
