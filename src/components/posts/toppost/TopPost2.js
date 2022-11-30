import "./toppost2.css"
import React from 'react'

const TopPost2 = () => {
  return (
    <div>
    <div className="topPost2">
      <img className="cardio" src="Images/snowForest.jpg" alt="" />
              
      <div className="cardioinfo">
        <p className="cardiodes">
        Forests cover large portions of the northern hemisphere, including around 30% of Switzerland's surface area.
        </p>
              
        <div className="cardiocatdate">
          <p className="cardiocat"> Nature</p>
          <p className="cardiodate">/ 02 Nov 2022</p> 
        </div>
      </div>
    </div>  
    <hr></hr>
  </div> 
  )
}

export default TopPost2;