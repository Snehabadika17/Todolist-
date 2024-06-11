// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, index, deleteTodo, toggleCompletion }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleCompletion(index)}
      >
        {todo.task}
      </span>
      <button onClick={() => deleteTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
