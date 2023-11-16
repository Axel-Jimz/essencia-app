import React from "react";
import { UseFormRegister } from "react-hook-form";
import ImageInput from "../..";

import "./styles/index.css";

export interface PostImageProps {
  register: UseFormRegister<any>;
  resetImageInput: boolean;
  setResetImageInput: any;
}

const PostImage: React.FC<PostImageProps> = ({
  register,
  resetImageInput,
  setResetImageInput,
}) => {
  return (
    <ImageInput
      register={register}
      registerName="postImage"
      resetImageInput={resetImageInput}
      setResetImageInput={setResetImageInput}
      id="post-image"
    />
  );
};

export default PostImage;
