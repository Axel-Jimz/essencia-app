import React from "react";
import { DeleteCommentButtonProps } from "./props";
import AsynchRectangleButton from "../..";
import TrashIcon from "../../../../icons/TrashIcon";
import { firebaseDeleteComment } from "../../../../../services/firebase/functions/data/delete/firebaseDeleteComment";

const DeleteCommentButton: React.FC<DeleteCommentButtonProps> = ({ postId, commentId }) => {
  return (
    <AsynchRectangleButton
      icon={<TrashIcon />}
      onClick={async () => await firebaseDeleteComment(postId, commentId)}
      bg="red"
      successTitle="Comentario eliminado"
      successDescription="Tu comentario se ha eliminado correctamente."
      errorTitle="Error al eliminar comentario"
      errorDescription="No se pudo eliminar el comentario. Por favor, inténtalo de nuevo."
    >
      Eliminar
    </AsynchRectangleButton>
  );
};

export default DeleteCommentButton;
