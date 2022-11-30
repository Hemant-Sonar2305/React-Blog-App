import Title from "../../title/Title"
import NavBar from "../../navbar/NavBar"
import Header from "../../header/Header"
import Articles from "../../posts/articles/Articles"
import Latest from "../../posts/latest/Latest"
import TopPost1 from "../../posts/toppost/TopPost1"
import Sidebar from "../../sidebar/Sidebar"
import Stories from "../../posts/stories/Stories"
import "./home.css"
import { Link } from "react-router-dom"
import React from 'react'

const Home = () => {
  return (
    <>
     < Title />
     < NavBar />
     < Link to="/singlepost"> < Header /> </Link>
      
      <div className="home">
        <div className="latest">The Latest</div>
        <div className="hr">_______</div>
        < Link to="/singlepost"> < Latest /> </Link>
        
        <div className="latest">Latest Articles</div>
        <div className="hr">_______</div> 
        
        <div className="as">
          <div className='articles'>
            < Link to="/singlepost"> < Articles /> </Link>
            < Link to="/singlepost"> < Articles /> </Link>
            < Link to="/singlepost"> < Articles /> </Link>
            < Link to="/singlepost"> < Articles /> </Link>
          </div>
          < Sidebar /> 
        </div>
        < Link className="homeTopPost" to="/singlepost"> < TopPost1 /> </Link>
      </div> 
      
      <div className="arrowload">
        < img className="bottom_arrow" src="Images/bottom_arrow.svg" alt="" />
        <p className="loadmore">LOAD MORE</p> 
      </div>
      
      <div className="bb">  
        <p id="bbtitle">Snow Forest</p>
        <p id="bbcat" >Nature / 02 Nov 2022</p> 
        <img className="bbimg" src="Images/snowForest.jpg" alt="" /> 
      </div> 
      
      <div className="ls ">
        <div className="latest1">Latest Stories</div>
        <div className="latest1hr">_______</div>
        <hr className="hrLine"/>

        <div className="storiespost" >
          <div className="sp1" > < Link to="/SinglePost"> < Stories /> </Link> </div>
          <div className="sp1" > < Link to="/SinglePost"> < Stories /> </Link> </div>
          <div className="sp1" > < Link to="/SinglePost"> < Stories /> </Link> </div>
        </div>
          
        <hr className="hrLine2"/>
      </div>

      
      <div className="arrowview">
        <p className="viewmore">VIEW MORE</p> 
        < img className="right_arrow" src="Images/right_arrow.svg" alt="" />
      </div>
           
    </>
  )
}

export default Home;