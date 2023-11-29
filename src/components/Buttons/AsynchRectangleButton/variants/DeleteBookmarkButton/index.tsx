import React, { useContext } from "react";
import { DeleteBookmarkButtonProps } from "./props";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import AsynchRectangleButton from "../..";
import SaveIcon from "../../../../icons/SaveIcon";
import { firebaseSavePost } from "../../../../../services/firebase/functions/data/create/firebaseSavePost";

const DeleteBookmarkButton: React.FC<DeleteBookmarkButtonProps> = ({ postId }) => {
  const { userId } = useContext(UserModelContext);

  return (
    <AsynchRectangleButton
      icon={<SaveIcon />}
      onClick={async () => await firebaseSavePost(postId, userId)}
      bg="blue"
      successTitle={'Has eliminado la publicación guardada'}
      successDescription={'Publicación eliminada con éxito'}
      errorTitle="Error al guardar la publicación"
      errorDescription="No se pudo guardar la publicación. Por favor, inténtalo de nuevo."
    >
      Eliminar
    </AsynchRectangleButton>
  );
};

export default DeleteBookmarkButton;
