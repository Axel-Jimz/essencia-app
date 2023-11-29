import React, { useContext } from "react";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import AsynchRectangleButton from "../..";
import TrashIcon from "../../../../icons/TrashIcon";
import { firebaseDeleteAllSavedPosts } from "../../../../../services/firebase/functions/data/delete/firebaseDeleteAllSavedPosts";

const DeleteAllBookmarksButton: React.FC = () => {
  const { userId } = useContext(UserModelContext);

  return (
    <AsynchRectangleButton
      icon={<TrashIcon />}
      onClick={async () => await firebaseDeleteAllSavedPosts(userId)}
      bg="red"
      successTitle="Publicaciones guardadas eliminadas"
      successDescription="Tus Publicaciones guardadas se ha eliminado correctamente."
      errorTitle="Error al eliminar las publicaciones guardadas"
      errorDescription="No se pudieron eliminar las publicaciones guardadas. Por favor, inténtalo de nuevo."
    >
      Eliminar todas
    </AsynchRectangleButton>
  );
};

export default DeleteAllBookmarksButton;
