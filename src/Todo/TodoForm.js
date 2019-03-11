import React, { Component, createRef } from "react";

class TodoForm extends Component {
  ref = createRef();
  state = {
    text: ""
  };
  componentDidMount() {
    this.ref.current.focus();
  }
  onChangeText = e => {
    this.setState({
      text: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addItem({
      id: Date.now(),
      text: this.state.text,
      done: false
    });
    this.setState({
      text: ""
    });
  };
  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input value={text} onChange={this.onChangeText} ref={this.ref} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TodoForm;
