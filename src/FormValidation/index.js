import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input';

class FormValidation extends Component {
  state = {
    name: '',
    email: '',
    addr: '',
    nameError: '',
    emailError: '',
    addrError: '',
  };
  onChangeName = e => {
    this.setState({
      name: e.target.value,
      nameError: '',
    });
  };
  onChangeEmail = e => {
    this.setState({
      email: e.target.value,
      emailError: '',
    });
  };
  onChangeAddr = e => {
    this.setState({
      addr: e.target.value,
      addrError: '',
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, email, addr } = this.state;
    const errors = {
      nameError: this.validateName(name),
      emailError: this.validateEmail(email),
      addrError: this.validateAddr(addr),
    };
    this.setState(errors);
  };
  validateName = val => (val === '' ? 'Name empty' : '');
  validateEmail = val => {
    if (val === '') {
      return 'Email empty';
    }
    if (!/.+@.+/.test(val)) {
      return 'Email invalid';
    }
    return '';
  };
  validateAddr = val => (val === '' ? 'Address empty' : '');
  render() {
    const { name, email, addr, nameError, emailError, addrError } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Input
          label="Name"
          value={name}
          onChange={this.onChangeName}
          error={nameError}
          clearable
        />
        <Input
          label="Email"
          value={email}
          onChange={this.onChangeEmail}
          error={emailError}
          clearable
        />
        <Input
          label="Address"
          value={addr}
          onChange={this.onChangeAddr}
          error={addrError}
          clearable
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormValidation;
