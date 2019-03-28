import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  const [items, setItems] = useState([]);
  const addItem = item => setItems([...items, item]);
  const toggleItem = id => {
    setItems(
      items.map(item =>
        item.id !== id
          ? item
          : {
              ...item,
              done: !item.done,
            },
      ),
    );
  };
  return (
    <div>
      <TodoForm addItem={addItem} />
      <TodoList items={items} toggleItem={toggleItem} />
    </div>
  );
};

export default Todo;
