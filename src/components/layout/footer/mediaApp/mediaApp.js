import React from "react"

import applestore  from "../assets/images/applestore.png"
import playstore  from "../assets/images/playstore.png"
export default function MediaApp(){


    return(
    <div className="mediaApp">
     <p>Get the App</p>
     <img src={applestore} />
     <img src={playstore} />
     

      
     </div>
    )
}