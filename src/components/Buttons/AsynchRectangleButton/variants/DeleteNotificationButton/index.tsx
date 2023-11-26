import React, { useContext } from "react";
import { DeleteNotificationButtonProps } from "./props";
import AsynchRectangleButton from "../..";
import TrashIcon from "../../../../icons/TrashIcon";
import { firebaseDeletePersonalNotification } from "../../../../../services/firebase/functions/data/delete/firebaseDeletePersonalNotification";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";

const DeleteNotificationButton: React.FC<DeleteNotificationButtonProps> = ({ notificationId }) => {
  const { userId } = useContext(UserModelContext);

  return (
    <AsynchRectangleButton
      icon={<TrashIcon />}
      onClick={async () => await firebaseDeletePersonalNotification(userId, notificationId)}
      bg="red"
      successTitle="Notificación eliminada"
      successDescription="Tu notificación se ha eliminado correctamente."
      errorTitle="Error al eliminar la notificación"
      errorDescription="No se pudo eliminar la notificación. Por favor, inténtalo de nuevo."
    >
      Eliminar
    </AsynchRectangleButton>
  );
};

export default DeleteNotificationButton;
