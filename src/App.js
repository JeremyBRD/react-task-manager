import './App.css';
import TodoItem from './TodoItem/TodoItem.js';

function App() {
  return (
    <div className="app">
      <div className='to-do-items'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
  </div>
  );
}

export default App;
