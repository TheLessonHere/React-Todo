// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

export default function TodoList (props) {
    const { todo, completedSetter } = props;

    const handleClick = event => {
        completedSetter()
    };

    return todo.map(task => {
           return <Todo 
           task={task.task} 
           id={task.id}
           completed={task.completed}
           onClick={handleClick} />
        })
}