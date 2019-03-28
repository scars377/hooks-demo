import React from 'react';
import useInput from '../hooks/useInput';

const Form = () => {
  const [name, onChangeName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [tel, onChangeTel] = useInput('');
  const [address, onChangeAddress] = useInput('');
  const onSubmit = e => {
    e.preventDefault();
    // some ajax
    console.log({ name, email, tel, address });
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input value={name} onChange={onChangeName} />
      <br />
      <label>E-mail</label>
      <input value={email} onChange={onChangeEmail} />
      <br />
      <label>Tel</label>
      <input value={tel} onChange={onChangeTel} />
      <br />
      <label>Address</label>
      <input value={address} onChange={onChangeAddress} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
