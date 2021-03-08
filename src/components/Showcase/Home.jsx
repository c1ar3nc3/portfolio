import React from 'react'
import './Home.scss'
import littleman from '/Users/c1ar3nc3/Projects/portfolio/src/docs/littleman.jpg'


export default function Home() {

  return (
    <div className="landing-page">
      <div className="home-title">
        <h1>Candice George</h1>
      </div>
      <div className="home-image">
        <img src={littleman} alt="littleman" />
        <p>Performing Artist - Traditional Singer - Storyteller - Cultural Facilitator</p>
      </div>
    </div>
  )
}
