import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"
export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current,{
      showCursor: false,
      strings: [' '],
      backDelay: 1500,
      backSpeed: 40,
    });
  },[])
  // because of [], this useEffect only triggers once
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/IMG_0792.png" alt="" className="image"/>
        </div>
      </div>

      <div className="right">
        
        <div className="wrapper">
          <h2>3rd-year CS major at The University of British Columbia</h2>
          
          <h3> 
            <span ref={textRef}>
              
            </span></h3>
        </div>
        {/* <a href="#portofolio">
          <img src= "assets/down.png" alt="" />
        </a> */}
      </div>
    </div>
  )
}
