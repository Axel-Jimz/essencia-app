import React from "react";
import { DeletePostButtonProps } from "./props";
import AsynchRectangleButton from "../..";
import TrashIcon from "../../../../icons/TrashIcon";
import { firebaseDeletePost } from "../../../../../services/firebase/functions/data/delete/firebaseDeletePost";

const DeletePostButton: React.FC<DeletePostButtonProps> = ({ postId }) => {
  return (
    <AsynchRectangleButton
      icon={<TrashIcon />}
      onClick={async () => await firebaseDeletePost(postId)}
      bg="red"
      successTitle="Publicación eliminada"
      successDescription="Tu publicación se ha eliminado correctamente."
      errorTitle="Error al eliminar la publicación"
      errorDescription="No se pudo eliminar la publicación. Por favor, inténtalo de nuevo."
    >
      Eliminar publicación
    </AsynchRectangleButton>
  );
};

export default DeletePostButton;
