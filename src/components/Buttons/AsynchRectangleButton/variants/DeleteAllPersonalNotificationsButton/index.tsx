import React, { useContext } from "react";
import AsynchRectangleButton from "../..";
import TrashIcon from "../../../../icons/TrashIcon";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import { firebaseDeleteAllPersonalNotifications } from "../../../../../services/firebase/functions/data/delete/firebaseDeleteAllPersonalNotifications";

const DeleteAllPersonalNotificationsButton: React.FC = () => {
  const { userId } = useContext(UserModelContext);

  return (
    <AsynchRectangleButton
      icon={<TrashIcon />}
      onClick={async () => await firebaseDeleteAllPersonalNotifications(userId)}
      bg="red"
      successTitle="Notificaciónes eliminadas"
      successDescription="Tus notificaciónes se ha eliminado correctamente."
      errorTitle="Error al eliminar las notificaciónes"
      errorDescription="No se pudieron eliminar las notificaciónes. Por favor, inténtalo de nuevo."
    >
      Eliminar todas
    </AsynchRectangleButton>
  );
};

export default DeleteAllPersonalNotificationsButton;
