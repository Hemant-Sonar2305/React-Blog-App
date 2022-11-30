import More from "./More"
import "./singlepost.css"
import React from 'react';


 const SinglePost = () => {
  return (
    <>
        <div className="singlepost" >
            <div className="sptitle">
            <span className="spthe">The</span>
            <p className="spsiren">Siren</p> 
            <button className="spbtn">Get Started</button>
        </div>

        <div className="blog"> 
            <div>
                <p className="spptitle">5 Ways to animate a React app.</p>
            
                <div className="adetails">
                    <img src="./Images/alogo.png" alt="" />

                
                    <div className="ainfo">
                        <p className="aname">Hemant Sonar</p>
                        <p className="spd">Nov 02 2022 / 10 min ago</p>
                    </div>

                    <div className="socialmedia">
                        <i class="fa fa-facebook-square"></i>
                        <i class="fa fa-twitter-square"></i>
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-youtube-play"></i>
                    </div>
                </div>
            </div>

            <div className="clap">
                <img className="clapimg" src="./Images/clap.svg" alt="" />

                9.3k 
            </div>

            <div className="share">
                <img className="shareimg" src="./Images/share.svg" alt="" />  

                Share this article 
            </div>
        
            <div className="reactimg">
                <img  className="reactimg1" src="./Images/reactimg.png" alt="" />


            </div>
        
            <p className="spdes">
                Animation in ReactJs app is a popular topic and there are many
                ways to create different types of animations. Many developers
                create animation exclusively using css and adding classes to 
                HTML tags.This is a great way and you should use it. If you
                want to create complex animations you can pay attention to
                GreenSock. GreenSock is the most powerful animation platform.
                There are also a lot of libraries, components for creating
                animation in React.
                <br></br><br></br>
                <strong>  Let’s talk about them  </strong>
            </p>


            <div className="reactimg">
                <img className="reactimg1" src="./Images/reactss.png" alt="" />

            </div>
       

            <div className="catclap1"> 
                <div className="spcat">
                    <p className="spcatlist">React</p>
                    <p className="spcatlist">Javascript</p>
                    <p className="spcatlist">Animation</p>
                </div>

                <div className="clap1">
                    <img  className="clapimg1"src="./Images/clap.svg" alt="" />

                    <p className="nineThreeText">9.3k</p> 
                </div >
            </div>
      
            <div className="adetails1">
                <img className="alogo1" src="./Images/alogo.png" alt="" />
               
                <div className="and">
                    <p className="awb">WRITTEN BY</p>
                    <p className="aname">Hemant Sonar</p>
                    <p className="spd">Nov 02 2022 / 10 min ago</p>
                </div>
            </div>
        </div>
  
        <div className="more0">
            <div className="more">
                <p className="moretitle">More From The Siren</p> 

                <div className="more2">
                    <More />
                    <More />
                    <More />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}


export default SinglePost;