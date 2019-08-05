import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: [],
      value: ''
    };
  }

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({ ...todo, value: event.target.value });
  };

  handleAddTodo = event => {
    console.log('Task Added');
    const currentdate = Date.now();
    this.setState({ todo: [...todo, {
      task: this.state.value,
      id: currentdate,
      completed: false
    }], ...value });
    this.setState({ ...todo, value: '' });
  };

  handleClearCompleted = event => {
    console.log('Cleared Completed');
    const clearedtodo = this.state.todo.filter(task => task.completed === true);
    this.setState({ todo: clearedtodo, ...value});
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
      </div>
    );
  }
}

export default App;
