import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Nav from './Nav';
import About from './About'
import Projects from './Projects'
import Contact from './Contact'




function App() {
  return (
    <div>
      <Nav />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
