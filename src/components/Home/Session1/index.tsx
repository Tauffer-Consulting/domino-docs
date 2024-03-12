import React from 'react'

import "./index.css"
import { Frame } from './Frame'
import { TitleGroup } from './TitleGroup'

export const Session1 = () => {
  return (
    <section id="section-1">
      <div id="container">
        <TitleGroup />
        <Frame />
      </div>
    </section>
  )
}
