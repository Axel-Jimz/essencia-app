import React, { useContext } from "react";
import AsynchRectangleButton from "../..";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import ShareIcon from "../../../../icons/ShareIcon";

const SharePostButton: React.FC = () => {
    return (
      <AsynchRectangleButton
        onClick={() => console.log('compartir publicación')}
        bg="gray"
        successTitle="Publicación compartida"
        successDescription="Tu publicación se ha compartido correctamente."
        errorTitle="Error al compartir la publicación"
        errorDescription="No se pudo compartir la publicación. Por favor, inténtalo de nuevo."
      >
       <ShareIcon /> Compartir
      </AsynchRectangleButton>
    );
  };
  
  export default SharePostButton;
  