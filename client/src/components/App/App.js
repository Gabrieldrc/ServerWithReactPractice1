import React, { Component } from 'react';
import './App.css';
import Nav from '../nav/nav';
import Home from '../home/home';
import Team from '../team/team';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:'Invitado',
      team: [
        {id:1, firstName:'Nobody', lastName:'Here', position:'yet'},
        {id:1, firstName:'Nobody', lastName:'Here', position:'yet'},
        {id:1, firstName:'Nobody', lastName:'Here', position:'yet'}
      ]
    };
  }
  
  // componentDidMount() {
  //   this.getUser();
  //   this.getTeam();
  // }

  // async getUser() {
  //   try{
  //     const response = await fetch('/');
  //     if (response.ok) {
  //       const user = await response.json();
  //       this.setState({user: user}, () => console.log('User conected..',user));
  //     } else {
  //       this.setState({user: 'Invitado'}, () => console.log('Invitado'));
  //       throw new Error('Request failed!');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async getTeam() {
  //   try{
  //     const response = await fetch('/team');
  //     if (response.ok) {
  //       const team = await response.json();
  //       this.setState({team}, () => console.log('We are..',team));
  //     } else {
  //       this.setState({team: [{id:1, fisrtName:'Nobody', lastName:'Here', position:'yet'}]}, () => console.log('Nobody here yet'));
  //       throw new Error('Request failed!');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
