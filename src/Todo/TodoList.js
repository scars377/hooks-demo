import React from "react";

const TodoList = ({ items, toggleItem }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <label>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleItem(item.id)}
          />
          <span>{item.text}</span>
        </label>
      </li>
    ))}
  </ul>
);

export default TodoList;
