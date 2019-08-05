import React from 'react';

import './Todo.css';

export default function Todo (props) {
    const { task, id, completed, handleClick } = props;

    return (
        <p id={id} className={completed.toString()} onClick={handleClick}>{task}</p>
    )
}