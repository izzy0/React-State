import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
      username: 'username'
  }

  switchNameHandler = (newName) => {
    this.setState({
      usernames: [
        {username: newName}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
     username: event.target.value}
    )
  }

  render() {

    const style={
      border: '2px soild red'
    };

    return (
      <div className="App" style={style}>
        <UserInput 
          inputedText={this.nameChangeHandler} 
          name={this.state.username}/>
        <UserOutput 
          name={this.state.username}/>
      </div>
    );
  }
}

export default App;
