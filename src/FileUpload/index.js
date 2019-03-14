import React, { Component } from 'react';

class FileUpload extends Component {
  state = {
    file: null,
    image: '',
  };
  componentDidUpdate(prevProps, prevState) {
    const { file } = this.state;
    if (file && file !== prevState.file) {
      const fr = new FileReader();
      fr.addEventListener('load', () => {
        this.setState({ image: fr.result });
      });
      fr.readAsDataURL(file);
    }
  }
  onChangeFile = e => {
    this.setState({
      file: e.target.files.item(0),
    });
  };
  onSubmit = e => {
    e.preventDefault();
    fetch('/api/upload', {
      method: 'POST',
      body: this.state.file,
    });
  };
  render() {
    const { image } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input type="file" accept="image/*" onChange={this.onChangeFile} />
        <br />
        <img src={image} width="300" alt="" />
      </form>
    );
  }
}

export default FileUpload;
