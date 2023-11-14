import React from "react";
import AsynchRectangleButton from "../..";
import TrashIcon from "../../../../icons/TrashIcon";

const DeleteCommentButton: React.FC = () => {
  return (
    <AsynchRectangleButton
      icon={<TrashIcon />}
      onClick={() => console.log('eliminar comentario')}
      bg="red"
      successTitle="Comentario eliminado"
      successDescription="Tu comentario se ha eliminado correctamente."
      errorTitle="Error al eliminar comentario"
      errorDescription="No se pudo eliminar el comentario. Por favor, inténtalo de nuevo."
    >
      Eliminar
    </AsynchRectangleButton>
  );
};

export default DeleteCommentButton;
