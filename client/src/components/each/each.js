import React from 'react';
import './each.css';

function Each(props) {
    return (
        <div className="each">
            <h3>{props.firstName}</h3>
            <h3>{props.lastName}</h3>
            <p>{props.position}</p>
        </div>
    );
}

export default Each;