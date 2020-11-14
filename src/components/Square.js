import React from 'react';

const style = {
    background: 'lightblue'
}
const Square = ({value, onClick}) => (

    <button onClick={onClick}>
        {value}
    </button>
)

export default Square
