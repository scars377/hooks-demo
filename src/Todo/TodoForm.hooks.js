import React, { useEffect, useRef } from 'react';
import useInput from '../hooks/useInput';

const TodoForm = ({ addItem = () => {}, items = [] }) => {
  const ref = useRef();
  const [text, onChangeText, setText] = useInput('');
  useEffect(() => {
    ref.current.focus();
  }, []);
  const onSubmit = e => {
    e.preventDefault();
    addItem({
      id: Date.now(),
      text,
      done: false,
    });
    setText('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input value={text} onChange={onChangeText} ref={ref} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
