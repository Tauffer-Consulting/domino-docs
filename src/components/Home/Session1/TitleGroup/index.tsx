import React, { useCallback } from 'react'
import "./index.css"

export const TitleGroup = () => {

  const handleClickCloud = useCallback(() => {
    window.open("https://domino-workflows.cloud/sign-in", "_blank")
  }, [])

  const handleClickDocs = useCallback(() => {
    window.location.href = "/docs/intro"
  }, [])

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
        {/* <h3 id="subtitle">You have the <b>idea</b>, Domino simplifies the process through an <b>intuitive workflow</b>, <i>no coding required</i>, and the result is a <b>seamless journey</b> from concept to reality.</h3> */}
        <h3 id="subtitle">You have the <b>idea</b>, Domino allows you to realize it through an <b>intuitive workflow</b>,  <i>no coding required</i>!</h3>
      </div>

      <div id="button-container">
        <button id="primary" onClick={handleClickCloud}>Try Domino</button>
        <button id="tertiary" onClick={handleClickDocs}>Learn more</button>
      </div>
    </div>
  )
}
