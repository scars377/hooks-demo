import React, { useState } from 'react';
import Input from './Input';

const useInput = (validator = () => '') => {
  const [error, setError] = useState('');
  const [value, setValue] = useState('');
  const onChange = e => {
    setValue(e.target.value);
    setError('');
  };
  const validate = () => {
    const err = validator(value);
    setError(err);
  };
  return [value, error, onChange, validate];
};

const validators = {
  name: val => (val === '' ? 'Name empty' : ''),
  email: val => {
    if (val === '') {
      return 'Email empty';
    }
    if (!/.+@.+/.test(val)) {
      return 'Email invalid';
    }
    return '';
  },
  addr: val => (val === '' ? 'Address empty' : ''),
};

const FormValidation = () => {
  const [name, nameError, onChangeName, validateName] = useInput(
    validators.name,
  );
  const [email, emailError, onChangeEmail, validateEmail] = useInput(
    validators.email,
  );
  const [addr, addrError, onChangeAddr, validateAddr] = useInput(
    validators.addr,
  );
  const onSubmit = e => {
    e.preventDefault();
    const errors = [validateName(), validateEmail(), validateAddr()];
    if (errors.filter(e => e).length > 0) {
      return;
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        label="Name"
        value={name}
        onChange={onChangeName}
        error={nameError}
        clearable
      />
      <Input
        label="Email"
        value={email}
        onChange={onChangeEmail}
        error={emailError}
        clearable
      />
      <Input
        label="Address"
        value={addr}
        onChange={onChangeAddr}
        error={addrError}
        clearable
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
