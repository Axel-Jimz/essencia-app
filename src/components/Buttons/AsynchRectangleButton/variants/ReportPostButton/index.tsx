import React from "react";
import AsynchRectangleButton from "../..";
import ReportIcon from "../../../../icons/ReportIcon";

const ReportPostButton: React.FC = () => {
  return (
    <AsynchRectangleButton
      icon={<ReportIcon />}
      onClick={() => console.log('reportar publicacion')}
      bg="orange"
      successTitle="Publicación reportada"
      successDescription="Has reportado esta publicación. Gracias por tu contribución."
      errorTitle="Error al reportar la publicación"
      errorDescription="No se pudo reportar la publicación. Por favor, inténtalo de nuevo."
    >
      Reportar publicación
    </AsynchRectangleButton>
  );
};

export default ReportPostButton;
