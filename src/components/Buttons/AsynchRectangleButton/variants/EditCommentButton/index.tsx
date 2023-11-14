import React from "react";
import AsynchRectangleButton from "../..";
import EditIcon from "../../../../icons/EditIcon";

const EditCommentButton: React.FC = () => {
    return (
      <AsynchRectangleButton
        icon={<EditIcon />}
        onClick={() => console.log('editar comentario')}
        bg="blue"
        successTitle="Comentario editado"
        successDescription="Tu comentario se ha editado correctamente."
        errorTitle="Error al editar comentario"
        errorDescription="No se pudo editar el comentario. Por favor, inténtalo de nuevo."
      >
        Editar
      </AsynchRectangleButton>
    );
  };
  
  export default EditCommentButton;
  