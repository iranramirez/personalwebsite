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
        <nav>    
            <ul className="nav-links">
                <Link 
                    style={navText}
                    to="/about"
                >
                    <li className="nav-items">About</li>
                </Link>
                <Link
                    style={navText}
                    to="/resume"
                >
                    <li className="nav-items">Resume</li>
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
                        <li className="nav-items">Projects</li>
                </Link>
                <Link 
                        style={navText} 
                        to="/contact"
                >
                        <li className="nav-items">Contact</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav