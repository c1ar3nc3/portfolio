import React from 'react'
import './Bio.scss'
import candice1 from '/Users/c1ar3nc3/Projects/portfolio/src/docs/candice1.jpg'

export default function Bio() {
  return (
    <div className="bio">
      <div className="bio-title">
        <h1>About the Artist</h1>
      </div>
      <div className="bio-main">
      <div className="bio-left">
        <img src={candice1} alt="Candice George"/>
      </div>
      <div className="bio-right">
        <h4>Pronouns: She, Her and Hers</h4>
        <p>
        Candice is Dakelh from the Northern Interior of British Columbia. Her U'loo (mother) Yvonne George is Stellat'en and U'ba (father) Wilfred George is Wet'su'wet'en. She is Kilweneetz'en, her matrilineal family lineage is Dene Yaz (Little man) a sub-house crest within the Luksilyu (Caribou) clan . All of her late grand-parents inspire her to continue their legacy; to pass on the customs and values of Uda Dene (Ancestors of Long Ago).
        </p>
      </div>
      </div>
    </div>
  )
}
