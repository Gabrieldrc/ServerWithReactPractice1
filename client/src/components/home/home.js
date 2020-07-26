import React from 'react';
import './home.css';

function Home(props) {
    return (
        <div id="home">
            <h2>Hey {props.user},</h2>
            <p className="presentation">This is a test of presentation. If you like it, just clone this 
                repository and personalize whatever you want. If you have suggestions,
                 leave me a message. The important thing here is:</p>
            <p className="quote">"Together we can grow and be wiser and united"</p>
            <p className="attributed">Gabriel Rodriguez</p>
        </div>
    );
}

export default Home;
