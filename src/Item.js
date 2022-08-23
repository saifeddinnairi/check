import React from 'react'

function Item(props) {
  return (
    <div>
      <img style={{height:'500px'}} src={props.image}></img>
      <p>{props.name}</p>
    </div>
  )
}

export default Item