import React, { Component } from 'react';
import './App.css';
import Nav from '../nav/nav';
import Home from '../home/home';
import Team from '../team/team';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:'Invitado'
    };
  }

  componentDidMount() {
    fetch('/user')
        .then(res => res.json())
        .then(user => this.setState({user: user}, () => console.log('User fetched..',user)));
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Home user={this.state.user} />
        <Team />
        
      </div>
    );
  }
}

export default App;
