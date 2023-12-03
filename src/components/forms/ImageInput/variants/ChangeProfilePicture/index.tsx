import React from "react";
import { ChangeProfilePictureProps } from "./props";

import ImageInput from "../..";

import "./styles/index.css";

const ChangeProfilePicture: React.FC<ChangeProfilePictureProps> = ({
  register,
  resetImageInput,
  setResetImageInput,
}) => {
  return (
    <ImageInput
      register={register}
      registerName="profilePictureURL"
      resetImageInput={resetImageInput}
      setResetImageInput={setResetImageInput}
      id="change-profile-picture"
    />
  );
};

export default ChangeProfilePicture;
