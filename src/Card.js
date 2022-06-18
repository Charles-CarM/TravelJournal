import React from "react"

export default function Card(props) {
  return(
    <div className="card">
      <span>
        <img src={props.cards.imageUrl}
             className="card--picture" />
      </span>
      <div className="card--info">
          <h3><span>{props.cards.location} {props.cards.googleMapsUrl} </span></h3>
          <h1>{props.cards.title}</h1>
          <p><strong><span>{props.cards.startDate}--{props.cards.endDate}</span></strong></p>
          <p>{props.cards.description}</p> 
      </div>
    </div>
  )
}