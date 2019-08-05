import React, { useState } from 'react';

const TodoForm = (props) => {
    const { submitTask, initialTask, clearCompleted } = props;
    const [value, setValue] = useState(initialTask || '');

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submitTask(value);
        setValue('');
    }

    return (
        <div className="new-task-form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>New Task:</legend>
                        <input
                        className='form-control'
                        type='text'
                        placeholder='...todo'
                        value={value}
                        onChange={handleChange}/>
                        <button type='submit'>Add Todo</button>
                        <button onClick={clearCompleted}>Clear Completed</button>
                </fieldset>
            </form>
        </div>
    )
}