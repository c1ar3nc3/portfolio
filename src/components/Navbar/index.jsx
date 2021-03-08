import './index.scss'
import logo from "/Users/c1ar3nc3/Projects/portfolio/src/docs/Skeh Nek'huna Hohdidul'eh.png"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="main-logo">
        <img src={logo} alt="logo"/>
      </div>  
      <div className="title">
        <h3>Skeh Nek'huna Hohdidul'eh</h3>
      </div>
      <div>
        <p>"Teaching Children Our Ways"</p>
      </div>
    </div>
  )
}
