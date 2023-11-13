import React, { useState, useEffect } from 'react';
import { ImageInputProps } from './props';

import "./styles/index.css";
import "./styles/theme.css";
import CloseIcon from '../../icons/CloseIcon';
import UploadImageIcon from '../../icons/UploadImageIcon';

const ImageInput: React.FC<ImageInputProps> = ({ register, registerName, fieldName, id, resetImageInput, setResetImageInput }) => {
  const [file, setFile] = useState<File | null>(null);

  const classes = ['image-input'];

  const handleFile = (e) => {
    console.log(e.target.files[0])
    const fileSelected = e.target.files[0];
    setFile(fileSelected);
  }

  const removeImage = () => {
    setFile(null);
    setResetImageInput(false)
  }

  useEffect(() => {
    removeImage()
  }, [resetImageInput]);


  return (
    <div className={classes.join(" ")}>
      {fieldName && <span>{fieldName}:</span> }
      <label htmlFor={id}>
        <input
          {...register(registerName)}
          name={registerName}
          id={id}
          type="file"
          onChange={(e) => handleFile(e)}
        />
        {!file && <div className='upload-image'> <UploadImageIcon /> Subir imagen </div>}
        {file && <img src={URL.createObjectURL(file)} alt="Selected Image" />}
        {file && <button className='remove-image' onClick={removeImage}><CloseIcon /></button>}
      </label>
    </div>
  );
};

export default ImageInput;