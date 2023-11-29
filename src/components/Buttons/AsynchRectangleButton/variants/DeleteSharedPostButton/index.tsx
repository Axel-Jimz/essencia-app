import React, { useContext } from "react";
import { DeleteSharedPostButtonProps } from "./props";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import AsynchRectangleButton from "../..";
import { firebaseSharePost } from "../../../../../services/firebase/functions/data/create/firebaseSharePost";

const DeleteSharedPostButton: React.FC<DeleteSharedPostButtonProps> = ({ sharedPostId, authorId }) => {
  const { userId } = useContext(UserModelContext);

  return (
    <AsynchRectangleButton
      onClick={async () => await firebaseSharePost(sharedPostId, authorId, userId)}
      bg="red"
      successTitle='Has eliminado la publicación compartida'
      successDescription='Publicación eliminada con éxito'
      errorTitle="Error al eliminar la publicación compartida"
      errorDescription="La publicación no ha sido eliminada"
    >
      Eliminar
    </AsynchRectangleButton>
  );
};

export default DeleteSharedPostButton;
