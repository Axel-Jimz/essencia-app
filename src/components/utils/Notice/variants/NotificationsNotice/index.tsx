import React from "react";
import Notice from "../..";
import NotificationIcon from "../../../../icons/NotificationIcon";

const NotificationsNotice: React.FC = () => {
  return (
    <Notice
      icon={<NotificationIcon />}
      title="No hay notificaciones"
      description="No tienes nuevas notificaciones en este momento. ¡Explora nuevas publicaciones y mantente al tanto de las novedades!"
      buttonContent="Ir al inicio"
      buttonRedirectPath="/"
    />
  );
};

export default NotificationsNotice;
