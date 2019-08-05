import React from 'react';

const TodoForm = (props) => {
    const { submitTask, clearCompleted, value, valueSetter } = props;

    return (
        <div className="new-task-form">
            <form onSubmit={submitTask}>
                <fieldset>
                    <legend>New Task:</legend>
                        <input
                        className='form-control'
                        type='text'
                        placeholder='...todo'
                        value={value}
                        onChange={valueSetter}/>
                        <button type='submit'>Add Todo</button>
                        <button onClick={clearCompleted}>Clear Completed</button>
                </fieldset>
            </form>
        </div>
    )
}

export default TodoForm;