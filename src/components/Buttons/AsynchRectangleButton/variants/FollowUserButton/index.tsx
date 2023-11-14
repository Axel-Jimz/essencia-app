import React from "react";
import AsynchRectangleButton from "../..";

const FollowUserButton: React.FC = () => {
    return (
      <AsynchRectangleButton
        onClick={() => console.log('Usuario seguido')}
        bg="blue"
        unstyled={true}
        successTitle="Comentario editado"
        successDescription="Tu comentario se ha editado correctamente."
        errorTitle="Error al editar comentario"
        errorDescription="No se pudo editar el comentario. Por favor, inténtalo de nuevo."
      >
        Seguir
      </AsynchRectangleButton>
    );
  };
  
  export default FollowUserButton;
  