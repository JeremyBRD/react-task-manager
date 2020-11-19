import React from 'react';
import './TodoItem.css';

function TodoItem() {
  return (
      <div className='to-do-item'>
        <input type="checkbox" />
        <p className='to-do-text'>Placeholder text here</p>
      </div>
  )
}

export default TodoItem;