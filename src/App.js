import './App.css';
import TodoItem from './TodoItem/TodoItem.js';
import todosData from "./todosData";
import React, {Component} from 'react';


class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: todosData
      
    }
  }

  render() {

    const todoComponents = this.state.todos.map(todo => <TodoItem key={todo.id} data={todo} />)

    return (
      <div className="app">
          <div className='to-do-items'>
            {todoComponents}
          </div>
      </div>
    )
  }
}

export default App;
