import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({children}) => {
  return (
   <Rnd
    default={{
       x: 100,
       y: 100,
       width: 700,  
       height: 500,
     }}
     bounds="parent" 
     
     >  
     <div className="window">
    <div className="nav">
        <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
        </div>
        <div className="title">
            <p>unfiltered_aditya007 - zsh</p>
        </div>
    </div>
    <div className="main">
        {children}
    </div>
    </div>
   </Rnd>
  )
}

export default MacWindow