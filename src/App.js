import React from 'react'
import './App.css'
import Front from './comps/Front'
import Nav from './comps/Nav'
import Contact from './comps/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={Front} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div >
    </Router>
  )
}

const Home = () => (
  <div>
    <h1>HELLO WORLD</h1>
  </div>
)

export default App
