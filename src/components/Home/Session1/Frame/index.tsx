
import React from 'react'
import "./index.css"

export const Frame = () => {
  return (
    <div id="gif-container">
      <div id="rectangle" >
        <div id="ellipse" className='red' />
        <div id="ellipse" className='yellow' />
        <div id="ellipse" className='green' />
        <img id="gif" src="img/intro/gif-example.gif" alt="domino platform gif"/>
      </div>
    </div>
  )
}
