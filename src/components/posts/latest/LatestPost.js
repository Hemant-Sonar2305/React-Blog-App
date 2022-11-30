import "./latestpost.css";
import React from 'react'

const LatestPost = () => {
  return (
    <>
    <div className="latestpost">
      <img className="tobias" src="Images/Image_3.jpg" alt="" />
      
      <div className="info">
        <p className="tobiastitle">Mountain</p>
        <p className="des">A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. Although definitions vary, a mountain may differ from a plateau in having a limited summit area, and is usually higher than a hill, typically rising at least 300 metres above the surrounding land.</p>
        
        <div className="catdate">
          <p className="cat"> Nature</p>
          <p className="date">/ 02 Nov 2022</p> 
        </div>
      </div>
    </div>
    
  </>
  )
}

export default LatestPost;