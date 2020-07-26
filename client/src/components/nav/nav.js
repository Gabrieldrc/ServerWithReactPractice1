import React from 'react';
import './nav.css';

function Nav(){
    return (
        <div className="nav">
            <h2 id="iconBar" className="bar">Logo</h2>
            <ul className="bar">
                <li><a href="#home">Home</a></li>
                <li><a href="#team">Team</a></li>
            </ul>
        </div>
    );
}

export default Nav;