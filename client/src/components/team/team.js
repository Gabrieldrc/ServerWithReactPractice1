import React, { Component } from 'react';
import './team.css';
import Each from '../each/each';

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            team: [
                {id:1, firstName:'Nobody', lastName:'Here', position:'yet'},
                {id:1, firstName:'Nobody', lastName:'Here', position:'yet'},
                {id:1, firstName:'Nobody', lastName:'Here', position:'yet'}
            ]
        }
    }

    componentDidMount() {
        fetch('/team')
            .then(res => res.json())
            .then(team => this.setState({team}, () => console.log('Team fetched..',team)));
    }

    render() {
        return (
            <div id="team" className="team">
                <h2 className="title">This is us:</h2>
                <div className="all">
                    {this.state.team.map(each => {
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
}

export default Team;