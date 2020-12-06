import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <div className='to-do-item'>
        <input
          type='checkbox'
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
          />
        <p className='to-do-text'>{props.item.text}</p>
      </div>
  )
}

export default TodoItem;
