import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return(
        <div className="UserInput">
            <h1>User Input</h1>
            <input 
                type="text" 
                onChange={props.inputedText} 
                value={props.name}/>
        </div>
    )
};

export default userInput;