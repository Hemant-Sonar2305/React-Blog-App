import './more.css'
import React from 'react';

const More = () => {
  return (
    <>
      <div className='more1'>
        <p className='rr'>Related reads</p>
        <img className="moreimg" src='./Images/wolf.webp' alt='' />
        <p className='imgtitle' > Wild Animal </p>
        <p className="aname1">Hemant Sonar</p>
        
        <div className="adetails2">
          <img src="./Images/alogo.png" alt="" />
                
          <div className="ainfo">
            <p className="aname">Hemant Sonar</p>
            <p className="spd">Nov 02 2022 / 10 min ago</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default More;