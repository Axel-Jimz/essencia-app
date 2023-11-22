import React, { useContext, useState } from "react";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import { useForm } from "react-hook-form";
import Form from "../../";
import ProfilePicture from "../../../../avatars/ProfilePicture";
import PostContentTextarea from "../../../Textarea/variants/PostContentTextarea";
import UploadImageButton from "../../../../buttons/RoundButton/variants/UploadImageButton";
import ButtonGroup from "../../../../groups/ButtonGroup";
import PostImage from "../../../ImageInput/variants/PostImage";
import CreatePostButton from "../../../../buttons/AsynchRectangleFormButton/variants/CreatePostButton";

import "./styles/index.css";

const CreatePostForm: React.FC = () => {
  const [showImageInput, setShowImageInput] = useState<boolean>(false);
  const [resetImageInput, setResetImageInput] = useState<boolean>(false);

  const { createPost, userId, profilePictureURL, username } = useContext(UserModelContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const handleButton = (e) => {
    e.preventDefault();
    setShowImageInput(!showImageInput);
  };

  const onSubmit = async (data: any) => {
    await createPost(data, userId);
    reset();
    setResetImageInput(true);
    setShowImageInput(false);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      successTitle="Post creado exitosamente"
      successDescription="¡Tu publicación ha sido creada exitosamente!"
      errorTitle="Error al crear la publicación"
      errorDescription="Se ha producido un error al intentar crear la publicación. Por favor, inténtalo nuevamente más tarde."
      id="create-post"
    >
      <div>
        <ProfilePicture src={profilePictureURL} alt={username} />
      </div>

      <div>
        <PostContentTextarea register={register} rules={{ required: true }} />

        {showImageInput && (
          <PostImage
            register={register}
            resetImageInput={resetImageInput}
            setResetImageInput={setResetImageInput}
          />
        )}

        <div>
          <ButtonGroup stack="horizontal">
            <UploadImageButton
              showImageInput={showImageInput}
              onClick={(e) => handleButton(e)}
            />
          </ButtonGroup>
          <CreatePostButton isSubmitting={isSubmitting} />
        </div>
      </div>
    </Form>
  );
};

export default CreatePostForm;
