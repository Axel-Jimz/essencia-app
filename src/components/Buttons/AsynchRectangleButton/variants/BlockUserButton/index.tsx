import React from "react";
import AsynchRectangleButton from "../..";
import BlockIcon from "../../../../icons/BlockIcon";


const BlockUserButton: React.FC = () => {
  return (
    <AsynchRectangleButton
      icon={<BlockIcon />}
      onClick={() => console.log('bloquear usuario')}
      bg="red"
      successTitle="Usuario bloqueado"
      successDescription="Has bloqueado a este usuario. Ya no verás su contenido."
      errorTitle="Error al bloquear usuario"
      errorDescription="No se pudo bloquear al usuario. Por favor, inténtalo de nuevo."
    >
      Bloquear usuario
    </AsynchRectangleButton>
  );
};

export default BlockUserButton;
