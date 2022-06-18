import React from "react"
import Card from "./Card"
import Navbar from "./Navbar"
//import data from "./data.js"

export default function App() {
  const cardData = data.map( cards => {
    return <Card 
              key={cards.title}
              cards={cards}
            />
  })
  return (
    <div className="App">
     <Navbar />
     <section className="cards-list">
      {cardData}
     </section>
    </div>
  );
}
