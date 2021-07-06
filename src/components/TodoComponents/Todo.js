import React from 'react';

import './Todo.css';

export default function Todo (props) {
    const { task, id, completed, onClick } = props;

    const completedChecker = () => {
        if (completed === true) {
            return 'completed'}
            else {return 'incomplete'}
    };

    return (
        <p id={id} className={completedChecker()} onClick={onClick}>{task}</p>
    )
}