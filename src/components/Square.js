import React from 'react';

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
}
const Square = ({value, onClick}) => (

    <button onClick={onClick}>
        {value}
    </button>
)

export default Square
