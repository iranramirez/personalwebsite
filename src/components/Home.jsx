import React from 'react';
import '../Styling.css'

function Home() {

    return (
        <div>
            <img 
                src={require("./images/ringdayPhoto.jpg")} 
                className="home-photo"
                alt="Ring Day"
            />
        </div>
    )
}

export default Home