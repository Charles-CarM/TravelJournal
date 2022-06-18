import React from "react"


export default function Card() {
  return(
    <div className="card">
      <span>
        <img src={props.cards.imageUrl}
             className="card--picture" />
      </span>
      <div classname="card--info">
      <p>{props.cards.description}</p> 
      </div>
    </div>
  )
}