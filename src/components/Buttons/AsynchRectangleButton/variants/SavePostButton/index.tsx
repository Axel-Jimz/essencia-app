import React, { useContext } from "react";
import { SavePostButtonProps } from "./props";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import useSavedPosts from "./hooks/useSavedPosts";
import AsynchRectangleButton from "../..";
import SaveIcon from "../../../../icons/SaveIcon";
import { firebaseSavePost } from "../../../../../services/firebase/functions/data/create/firebaseSavePost";

const SavePostButton: React.FC<SavePostButtonProps> = ({ postId }) => {
  const { userId } = useContext(UserModelContext);

  const { isSaved}  = useSavedPosts(postId, userId);

  return (
    <AsynchRectangleButton
      icon={<SaveIcon />}
      onClick={async () => await firebaseSavePost(postId, userId)}
      bg="blue"
      successTitle={isSaved ? 'Has eliminado la publicación guardada' : 'Publicación guardada'}
      successDescription={isSaved ? 'Publicación eliminada con éxito' : 'Publicación guardada con éxito'}
      errorTitle="Error al guardar la publicación"
      errorDescription="No se pudo guardar la publicación. Por favor, inténtalo de nuevo."
    >
      {isSaved ? 'Eliminar publicación guardada' : 'Guardar publicación'}
    </AsynchRectangleButton>
  );
};

export default SavePostButton;
