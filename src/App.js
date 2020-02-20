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
          <Route path="/" exact component={Front} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div >
    </Router>
  )
}

export default App