import React, { Component } from 'react';
import TodoItem from './TodoItem/TodoItem';
import todosData from './todosData';

// Import Style
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed
              }
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
  }

  render() {

    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

    return (
      <div className='app'>
          <div className='to-do-items'>
            {todoItems}
          </div>
      </div>
    )
  }
}

export default App;
