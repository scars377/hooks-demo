import React from "react";

const TodoList = ({ items, toggleItem }) => (
  <ul>
    {items.map(item => (
      <li key={item.id} onClick={() => toggleItem(item.id)}>
        [{item.done ? "v" : " "}] {item.text}
      </li>
    ))}
  </ul>
);

export default TodoList;
