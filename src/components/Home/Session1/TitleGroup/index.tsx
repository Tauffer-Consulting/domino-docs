import React from 'react'
import "./index.css"

export const TitleGroup = () => {
  return (
    <div id="text-container">
      <div id="title-container">
        <h1 id="title">
          <span>Build</span>
          <span>amazing ideas,</span>
          <span><i id="piece">piece</i> by <i id="piece">piece.</i></span>
        </h1>
      </div>

      <div id="subtitle-container">
        <h3 id="subtitle">You have the <b>idea</b>, Domino simplifies the process through an <b>intuitive workflow</b>, <i>no coding required</i>, and the result is a <b>seamless journey</b> from concept to reality.</h3>
      </div>

      <div id="button-container">
        <button id="primary">Discover now</button>
        <button id="tertiary">Learn more</button>
      </div>
    </div>
  )
}
