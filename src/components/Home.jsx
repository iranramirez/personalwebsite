import React from 'react';
import '../Styling.css';
import {SocialIcon} from 'react-social-icons';


const textStyle = {
    color: 'white',
    textAlign: 'center'
}
function Home() {

    return (
        <div className="photo-container">
            <img 
                src={require("./images/ringdayPhoto.jpg")} 
                className="home-photo first"
                alt="Ring Day"
            />
            <h2 style={textStyle}>Irán Antonio Ramirez</h2>
            <ul className="social-links">
                <li>
                     <SocialIcon 
                        url="http://www.linkedin.com/in/iranramirez"
                        fgColor="white"
                        target="_blank"
                    />
                </li>
                <li>
                    <SocialIcon 
                        url="http://www.github.com/iranramirez"
                        fgColor="white"
                        bgColor="black"
                        target="_blank"
                    />
                </li>
                <li>
                    <SocialIcon 
                        url="http://www.instagram.com/iranonoiran"
                        fgColor="white"
                        
                        target="_blank"
                    />
                </li>
            </ul>
        </div>
    )
}

export default Home