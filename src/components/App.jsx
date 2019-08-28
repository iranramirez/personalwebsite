import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Background from './Background'

const App = () => { 
  return (
    <Router>
      <Nav />
      <Background />
      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
