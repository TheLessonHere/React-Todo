import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: [{
        task: 'Create App',
        id: 1,
        completed: false
      },
      {
        task: 'Style App',
        id: 2,
        completed: false
      }],
      value: ''
    };
  }

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({ ...this.state.todo, value: event.target.value });
  };

  handleAddTodo = event => {
    event.preventDefault();
    console.log('Task Added');
    const currentdate = Date.now();
    this.setState({ todo: [...this.state.todo, {
      task: this.state.value,
      id: currentdate,
      completed: false
    }], value: '' });
  };

  handleClearCompleted = event => {
    console.log('Cleared Completed');
    const clearedtodo = this.state.todo.filter(task => task.completed === false);
    console.log(clearedtodo);
    this.setState({ todo: [clearedtodo], ...this.state.value});
  }

  handleSetComplete = event => {
    console.log(`Set to completed`);
    const clickedID = event.target.id;
    this.setState(prevState => ({
      todo: prevState.todo.map(
        task => task.id === clickedID ? { ...task, completed: !prevState.task.completed } : task
      )
    }))
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todo={this.state.todo} completedSetter={this.handleSetComplete} />
        <TodoForm 
        submitTask={this.handleAddTodo} 
        clearCompleted={this.handleClearCompleted}
        value={this.state.value}
        valueSetter={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
