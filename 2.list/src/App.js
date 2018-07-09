import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

  state = {
    
      string: '',
      // chrList : [{
      //   id: 1, 
      //   chr: null
      // }]
    
  }

  deleteCharHandler = (index) =>{
    const text = this.state.string.split('');
    text.splice(index,1);
    const updateText = text.join('');
    this.setState({string: updateText});

  }

  stringListHandler = () =>{
    const charList = [...this.state.string].split('');
    // cosnt charSize = this.state.chr.length;
    // for(let i = 0; i<){

    // }
    // this.setState({chr:chr});
  }

  inputLengthHandler= (event) => {
    this.setState({string: event.target.value});

    // const newLength = event.target.value.length;
    // const newString = event.target.value;

    // const chr = [...this.state.chr];
    // chr.length = newLength;
    // chr.string = newString;

    // this.setState({chr: chr});
  }

  // validation checks for char length  X
  //  5<x<100 outputs too short or too long X

  // charComponets CSS X?
  // charC revieces a list of letters via prop
  // when letter is clicked it should disappear 

  render() {
    const style ={
      padding: '10px 40px',
      margin: 'auto',
      fontSize: '30px',
      border: '1px solid #eee',
      display:'inline-block',
      textAlign: 'center',
      boxShadow: '0 2px 3px #ccc'
    };

    const charList = this.state.string.split('').map((ch , index) =>{
      return <Char 
        char={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)}/>;
    });

    return (
      <div className="App" >
        <div style={style}>
          <p>Enter a String and Delete the characters you Hate*</p>
          <input 
            type="text"
            onChange={this.inputLengthHandler}
            value={this.state.string} />
          <Validation charLength={this.state.string.length} />
        </div>
        <div className="CharList">    
            <p>{this.stringListHandler}</p>
            {charList}
        </div>
      </div>
    );
  }
}

export default App;
