import React from 'react';
import './team.css';
import Each from '../each/each';

function Team(props) {
    return (
        <div id="team" className="team">
            <h2 className="title">This is us:</h2>
            <div className="all">
                {props.team.map(each => {
                    return <Each 
                    firstName={each.firstName}
                    lastName={each.lastName}
                    position={each.position}
                    />;
                })}
            </div>
        </div>
    );
}

export default Team;