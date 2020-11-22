import './App.css';
import TodoItem from './TodoItem/TodoItem.js';
import todosData from "./todosData";

function App() {

  const todoComponents = todosData.map(todo => <TodoItem key={todo.id} data={todo} />)

  return (
    <div className="app">
      <div className='to-do-items'>
        {todoComponents}
      </div>
  </div>
  );
}

export default App;
