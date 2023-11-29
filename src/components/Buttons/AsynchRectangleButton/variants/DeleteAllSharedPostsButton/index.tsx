import React, { useContext } from "react";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import AsynchRectangleButton from "../..";
import TrashIcon from "../../../../icons/TrashIcon";
import { firebaseDeleteAllSharedPosts } from "../../../../../services/firebase/functions/data/delete/firebaseDeleteAllSharedPosts";

const DeleteAllSharedPostsButton: React.FC = () => {
  const { userId } = useContext(UserModelContext);

  return (
    <AsynchRectangleButton
      icon={<TrashIcon />}
      onClick={async () => await firebaseDeleteAllSharedPosts(userId)}
      bg="red"
      successTitle="Publicaciones compartidas eliminadas"
      successDescription="Tus Publicaciones compartidas se ha eliminado correctamente."
      errorTitle="Error al eliminar las publicaciones compartidas"
      errorDescription="No se pudieron eliminar las publicaciones compartidas. Por favor, inténtalo de nuevo."
    >
      Eliminar todas
    </AsynchRectangleButton>
  );
};

export default DeleteAllSharedPostsButton;
