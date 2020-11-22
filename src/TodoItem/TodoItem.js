import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const checkedBox = props.data.completed
  return (
      <div className='to-do-item'>
        <input type="checkbox" checked={props.data.completed}/>
        <p className='to-do-text'>{props.data.text}</p>
      </div>
  )
}

export default TodoItem;