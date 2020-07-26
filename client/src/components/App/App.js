import React, { Component } from 'react';
import './App.css';
import Nav from '../nav/nav';
import Home from '../home/home';
import Team from '../team/team';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:'',
      team: []
    };
  }
  
  user() {
    fetch('/')
        .then(res => res.json())
        .then(user => this.setState({user: user}, () => console.log('User conected..',user)));
  }

  team() {
    fetch('/team')
        .then(res => res.json())
        .then(team => this.setState({team}, () => console.log('We are..',team)));
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Home user={this.state.user} />
        <Team team={this.state.team}/>
        
      </div>
    );
  }
}

export default App;
