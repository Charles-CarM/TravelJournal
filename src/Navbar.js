import React from "react"
import travel from "./images/travel.jpg"
export default function Navbar() {
  return(
    <nav>
       <img src = {travel}
            className="travel"
        />
        <span>My travel excerpt</span>
    </nav>
    )
}