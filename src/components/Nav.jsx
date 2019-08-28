import React from 'react'
import {Link} from 'react-router-dom'
import '../Styling.css'

const Nav = () => {
    const navText = {
        color: 'white',
        textDecoration: 'none', 
        borderStyle:'',
        borderColor: ''
    }

    return (
        <div className="NavBar">
            <nav>    
                <ul className="nav-links">
                    <Link 
                        style={navText}
                        to="/about"
                    >
                        <li>About</li>
                    </Link>
                    <Link
                        style={navText}
                        to="/resume"
                    >
                        <li>Resume</li>
                    </Link>
                    <Link 
                        style={navText} 
                        to=""
                    >
                        <li>
                            <div className="circle-logo">
                                <img 
                                    src={require("./images/titleLogo.png")}
                                    className="logo"
                                    alt="Initials Logo"
                                />
                            </div>
                        </li>
                    </Link>
                    <Link 
                        style={navText} 
                        to="/projects"
                    >
                        <li>Projects</li>
                    </Link>
                    <Link 
                        style={navText} 
                        to="/contact"
                    >
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
export default Nav