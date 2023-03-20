import React from 'react'
import './Side.scss'
const Side = ({open , setopen}) => {
  return (
    <div className={'side ' + (open && "active")}>
      <ul>
        <li onClick={()=>{setopen(false)}} ><a href="#intro">Home</a></li>
        <li onClick={()=>{setopen(false)}}><a href="#portfolio">Portfolio</a></li>
        <li onClick={()=>{setopen(false)}}><a href="#test">Test</a></li>
        <li onClick={()=>{setopen(false)}}><a href="#work">Work</a></li>
        <li onClick={()=>{setopen(false)}}><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Side
