import Home from './Home'
import Contact from './Contact'
import Bio from './Bio'
import Photos from './Photos'
import './index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaAddressCard, FaCamera, FaHome, FaPhone } from 'react-icons/fa'

export default function index() {
  return (
    <div className="main-section">
      <Router>
        <div className="main-links">
          <Link to="/"><FaHome/></Link>
          <Link to="/Bio"><FaAddressCard /></Link>
          <Link to="/Photos"><FaCamera /></Link>
          <Link to="/Contact">< FaPhone /></Link>
        </div>
        <Switch>
          <Route exact path="/Contact"
            render = {() => (
              <Contact />
            )}
          />
          <Route exact path="/Photos"
            render = {() => (
              <Photos />
            )}
          />
          <Route exact path="/Bio"
            render = {() => (
              <Bio />
            )}
          />
          <Route exact path="/"
            render = {() => (
              <Home />
            )}
          />
        </Switch>
      </Router>
    </div>
  )
}
