import React, { useState } from "react";
import Form from "../../";
import { useForm } from "react-hook-form";

import "./styles/index.css";
import ProfilePicture from "../../../../avatars/ProfilePicture";
import PostContentTextarea from "../../../Textarea/variants/PostContentTextarea";
import UploadImageButton from "../../../../buttons/RoundButton/variants/UploadImageButton";
import CreatePostButton from "../../../../buttons/AsynchRectangleFormButton/variants/CreatePostButton";
import ButtonGroup from "../../../../groups/ButtonGroup";
import PostImage from "../../../ImageInput/variants/PostImage";

const CreatePostForm: React.FC = () => {
  const [showImageInput, setShowImageInput] = useState<boolean>(false);
  const [resetImageInput, setResetImageInput] = useState<boolean>(false);

  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} id="create-post">
      <div>
        <ProfilePicture src="" alt="" />
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
              onClick={() => setShowImageInput(!showImageInput)}
            />
          </ButtonGroup>
          <CreatePostButton isSubmitting={false} />
        </div>
      </div>
    </Form>
  );
};

export default CreatePostForm;
