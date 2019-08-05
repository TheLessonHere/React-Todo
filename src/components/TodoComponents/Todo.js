import React from 'react';

export default function Todo (props) {
    const { task, id, completedSetter } = props;

    handleClick = event => {
        completedSetter()
    };

    return (
        <p id={id} className='list-item' onClick={handleClick}>{task}</p>
    )
}