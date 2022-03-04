import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"
export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current,{
      showCursor: false,
      strings: [' @babel/plugin-syntax-flow@^7.14.5', ' ypescript@>= 2.7', ' autoprefixer@^10.0.2'],
      backDelay: 1500,
      backSpeed: 40,
    });
  },[])
  // because of [], this useEffect only triggers once
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imageContainer">
          {/* <img src="assets/man.png" alt="" /> */}
        </div>
      </div>

      <div className="right">
        
        <div className="wrapper">
          <h2>This is</h2>
          <h1>DEMO</h1>
          <h3> student
            <span ref={textRef}>
              
            </span></h3>
        </div>
        <a href="#portofolio">
          <img src= "assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
