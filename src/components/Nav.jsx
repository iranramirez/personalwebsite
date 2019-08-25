import React from 'react';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import '../Styling.css'


function Nav() {

    return(
        <div>
            <nav>    
                <ul className="nav-links">
                    <li>About Me</li>
                    <li>Resume</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>     
        </div>
    )

}

export default Nav