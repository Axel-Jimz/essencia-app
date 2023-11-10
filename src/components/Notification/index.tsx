import React from "react";

interface NotificacionProps {
  message: string;
}

const Notificacion: React.FC<NotificacionProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default Notificacion;
