import React from "react";
import AsynchRectangleButton from "../..";
import EditIcon from "../../../../icons/EditIcon";

const EditPostButton: React.FC = () => {
    return (
      <AsynchRectangleButton
        icon={<EditIcon />}
        onClick={() => console.log('editar comentario')}
        bg="green"
        successTitle="Publicación editada"
        successDescription="Tu publicación se ha editado correctamente."
        errorTitle="Error al editar la publicación"
        errorDescription="No se pudo editar la publicación. Por favor, inténtalo de nuevo."
      >
        Editar publicación
      </AsynchRectangleButton>
    );
  };
  
  export default EditPostButton;
  