import Home from './Home'
import Contact from './Contact'
import Bio from './Bio'
import Photos from './Photos'
import './index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default function index() {
  return (
    <div className="main-section">
      <Router>
        <div className="main-links">
          <Link to="/">Home</Link>
          <Link to="/Bio">Bio</Link>
          <Link to="/Photos">Photos</Link>
          <Link to="/Contact">Contact</Link>
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
