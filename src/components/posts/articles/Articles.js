import "./articles.css"
import React from 'react'

const Articles = () => {
  return (
    <> 
    <hr className="ahr"></hr>
    <div className="ii">
    <img className="bp1" src="Images/wolf.webp" alt="" />
          
      <div className="bp1info">
        <p className="bp1title">Wolf</p>
        <p className="bp1des">
        Some wolves in Yellowstone National Park, Wyoming, share territory with cougars.
        </p>
            
        <div className="bp1catdate">
          <p className="bp1cat"> Animal</p>
          <p className="bp1date">/ 02 Nov 2022</p> 
        </div>
      </div>
    </div>
  </>
  )
}

export default Articles;