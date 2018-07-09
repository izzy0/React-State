import React from 'react'
import './Char.css'

const charHandler = (props) => {
   const style = {
    padding: '10px,',
    margin: '10px',
    fontSize: '30px',
    display: 'inline-block',
    textAlign: 'center',
    cursor: 'pointer'
   };

    return(
        props.char != ' '? 
        <div className='Char char-spin' onClick={props.clicked}>
            {props.char}
            {props.index}
        </div> : <div style={style} onClick={props.clicked}></div>
    )
}

export default charHandler;