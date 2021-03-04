import React from 'react'
import { PhotoData } from '../../data/PhotoData'
import './Photos.scss'

export default function Photos() {
  return (
    <div>
      {PhotoData.map((pic) => {
        return <img src={pic.image}  height="100" />
      })}
    </div>
  )
}
