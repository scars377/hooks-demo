import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class Todo extends Component {
  state = {
    items: []
  };
  addItem = item => {
    this.setStata({
      items: [...this.state.items, item]
    });
  };
  toggleItem = id => {
    this.setState({
      items: this.state.items.map(item =>
        item.id !== id
          ? item
          : {
              ...item,
              done: !item.done
            }
      )
    });
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <TodoForm addItem={this.addItem} />
        <TodoList items={items} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default Todo;
