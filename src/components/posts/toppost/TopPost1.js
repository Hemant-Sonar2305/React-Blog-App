import "./toppost1.css"
import TopPost2 from "./TopPost2"
import React from 'react'


const TopPost1 = () => {
  return (
   
    <div className="toppost1"> 
       
      <div className="tp1title">Top Posts</div>
      <div className="tp1hr">_______</div> 
      <img className="seafood" src="Images/forest.jpg" alt="" />
          
      <div className="foodinfo">
        <p className="fooddes">
        Forest, complex ecological system in which trees are the dominant life-form.</p>
                
        <div className="foodcatdate">
          <p className="foodcat"> Nature</p>
          <p className="fooddate">/ 02 Nov 2022</p> 
        </div>
      </div>
        <hr></hr>


      < TopPost2 /> 
      < TopPost2 /> 
      < TopPost2 />
      
    </div>
  )
}

export default TopPost1;