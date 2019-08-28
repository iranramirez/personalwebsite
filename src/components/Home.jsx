import React from 'react'
import {SocialIcon} from 'react-social-icons'
import '../Styling.css'

const textStyle = {
    textAlign: 'center'
}

const Home = () => {

    return (
        <div style={{textAlign: 'center'}}>
            <div className="photo-container">
                <img 
                    src={require("./images/ringdayPhoto.jpg")} 
                    className="home-photo first"
                    alt="Ring Day"
                />
                <h2 style={textStyle}>Irán Antonio Ramirez</h2>
                <ul className="social-links">
                    <li className="grow-icon">
                        <SocialIcon
                            url="http://www.linkedin.com/in/iranramirez"
                            fgColor="white"
                            target="_blank"
                        />
                    </li>
                    <li className="grow-icon">
                        <SocialIcon 
                            url="http://www.github.com/iranramirez"
                            fgColor="white"
                            bgColor="black"
                            target="_blank"
                        />
                    </li>
                    <li className="grow-icon">
                        <SocialIcon 
                            url="http://www.instagram.com/iranonoiran"
                            fgColor="white"
                            bgColor="#bc2a8d"
                            target="_blank"
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home