import "./header.css"
import React from 'react'

const Header = () => {
  return (
    <>
    <div className="header" >
     
       <div className="text">
          <p className="blogtitle">RIVER MOUNTAIN TREES</p>
          <p className="blogcatdate">Nature / 02 Nov 2022</p>
        </div>
      
        <div className="header1">
          <img className="img1" src='Images/headerImage.jpg' alt=""></img>
        </div>

        <div className="header2">
          <div className="text1">
            <p className="blogtitle1">RIVER MOUNTAIN TREES</p>
            <p className="blogcatdate1">Nature / 02 Nov 2022</p>
          </div>

          <img className="img2" src='Images/headerImage.jpg' alt=""></img>
          <img className="img2" src='Images/headerImage.jpg' alt=""></img>
          
          <div className="text2">
            <p className="blogtitle2">RIVER MOUNTAIN TREES</p>
            <p className="blogcatdate2">Nature / 02 Nov 2022</p>
          </div> 
        </div>
      </div>
    
    </>
  )
}

export default Header;