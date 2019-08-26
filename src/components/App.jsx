import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';




function App() {
  
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
