import React, { useContext } from "react";
import AsynchRectangleButton from "../..";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import SaveIcon from "../../../../icons/SaveIcon";

const SavePostButton: React.FC = () => {
  return (
    <AsynchRectangleButton
      icon={<SaveIcon />}
      onClick={() => console.log('guardar publicacion')}
      bg="blue"
      successTitle="Publicación guardada"
      successDescription="Tu publicación se ha guardado correctamente."
      errorTitle="Error al guardar la publicación"
      errorDescription="No se pudo guardar la publicación. Por favor, inténtalo de nuevo."
    >
      Guardar publicación
    </AsynchRectangleButton>
  );
};

export default SavePostButton;
