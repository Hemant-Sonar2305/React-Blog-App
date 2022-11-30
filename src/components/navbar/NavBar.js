import React, { useState } from "react";
import "./navbar.css"
import { Link } from "react-router-dom"


const NavBar = () => { 
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click); 
  return (

    <>
    <ul className= {click ? "navbar active" : "navbar"}>
      <li className="navlist">
       <Link className="a" to="/" onClick={handleClick}>Home</Link> </li>

      <li className="navlist">
      <Link className="a"  to="/bollywood" onClick={handleClick}>Bollywood</Link>  </li>

      <li className="navlist">
      <Link className="a"  to="/technology" onClick={handleClick}>Technology</Link>  </li>

      <li className="navlist">
      <Link className="a" to="/hollywood" onClick={handleClick}>Hollywood</Link>  </li>
      
      <li className="navlist">
      <Link className="a" to="/fitness" onClick={handleClick}>Fitness</Link>  </li>

      <li className="navlist">
      <Link  className="a" to="/food" onClick={handleClick}>Food</Link>  </li>
    </ul>

    <div className="nav-icon" onClick={handleClick}>
      <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
    </div>
    </>
 
  )
}

export default NavBar;