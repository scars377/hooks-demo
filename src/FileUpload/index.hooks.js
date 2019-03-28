import React, { useState, useEffect } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (file) {
      const fr = new FileReader();
      fr.addEventListener('load', () => setImage(fr.result));
      fr.readAsDataURL(file);
    }
  }, [file]);

  const onChangeFile = e => setFile(e.target.files.item(0));

  const onSubmit = e => {
    e.preventDefault();
    fetch('/api/upload', {
      method: 'POST',
      body: file,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="file" accept="image/*" onChange={onChangeFile} />
      <br />
      <img src={image} width="300" alt="" />
    </form>
  );
};

export default FileUpload;
