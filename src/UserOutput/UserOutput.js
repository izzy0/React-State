import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <h1>User Output</h1>
            <p>This is a React test to change state and object binding.</p>
            <p>Username: {props.name}</p>
        </div>
    )
};

export default userOutput;