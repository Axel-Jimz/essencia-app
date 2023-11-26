import React, { useContext } from "react";
import { CreatePostCommentFormProps } from "./props";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import { useForm } from "react-hook-form";

import Form from "../..";
import CommentContentTextarea from "../../../Textarea/variants/CommentContentTextarea";
import CreateCommentButton from "../../../../buttons/AsynchRoundFormButton/variants/CreateCommentButton";

import { firebaseCommentPost } from "../../../../../services/firebase/functions/data/create/firebaseCommentPost";

import "./styles/index.css";

const CreatePostCommentForm: React.FC<CreatePostCommentFormProps> = ({ postId, authorId }) => {
  const { userId } = useContext(UserModelContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    await firebaseCommentPost(postId, authorId, userId, data)
    reset()
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      successTitle="Comentario creado exitosamente"
      successDescription="¡Tu comentario ha sido creada exitosamente!"
      errorTitle="Error al crear el comentario"
      errorDescription="Se ha producido un error al intentar crear el comentario. Por favor, inténtalo de nuevo"
      id="create-post-comment"
    >
      <CommentContentTextarea register={register} rules={{ required: true }} />
      <div>
        <CreateCommentButton isSubmitting={isSubmitting} />
      </div>
    </Form>
  );
};

export default CreatePostCommentForm;
