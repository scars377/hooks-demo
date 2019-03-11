import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    email: "",
    tel: "",
    address: ""
  };
  onChangeName = e => {
    this.setState({ name: e.target.value });
  };
  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };
  onChangeTel = e => {
    this.setState({ tel: e.target.value });
  };
  onChangeAddress = e => {
    this.setState({ address: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, email, tel, address } = this.state;
    // some ajax
    console.log({ name, email, tel, address });
  };
  render() {
    const { name, email, tel, address } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>Name</label>
        <input value={name} onChange={this.onChangeName} />
        <br />
        <label>E-mail</label>
        <input value={email} onChange={this.onChangeEmail} />
        <br />
        <label>Tel</label>
        <input value={tel} onChange={this.onChangeTel} />
        <br />
        <label>Address</label>
        <input value={address} onChange={this.onChangeAddress} />
        <br />
      </form>
    );
  }
}

export default Form;
