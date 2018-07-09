import React from 'react'

const validation = (props) => {

    
    // if(props.charLength <= 5){
    //     return(<p>Need MORE characters in the input!</p>)
    // }else if (props.charLength > 100){
    //     return(<p>TOO many characters in the input!</p>)
    // }else{
    //     return(<p>OK</p>)
    // }

    let validationMessage = 'OK';

    if(props.charLength <= 5){
        validationMessage='Too short!';
    }

    return(
        <div>
            <p>{validationMessage}</p>
        </div>
    );
}

export default validation;