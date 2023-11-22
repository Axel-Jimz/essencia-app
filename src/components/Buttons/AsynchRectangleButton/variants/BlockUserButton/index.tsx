import React, { useContext } from "react";
import { BlockUserButtonProps } from "./props";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import useBlockedUsers from "./hooks/useBlockedUsers";
import AsynchRectangleButton from "../..";
import BlockIcon from "../../../../icons/BlockIcon";
import { firebaseBlockUser } from "../../../../../services/firebase/functions/data/create/firebaseBlockUser";

const BlockUserButton: React.FC<BlockUserButtonProps> = ({ userToBlockId }) => {
  const { userId } = useContext(UserModelContext);

  const { isBlockedUser } = useBlockedUsers(userId, userToBlockId)

  return (
    <AsynchRectangleButton
      icon={<BlockIcon />}
      onClick={async () => await firebaseBlockUser(userId, userToBlockId)}
      bg="red"
      successTitle={isBlockedUser ? 'Usuario desbloqueado' : 'Usuario bloqueado'}
      successDescription={isBlockedUser ? 'Usuario desbloqueado con éxito' : 'Usuario bloqueado con éxito'}
      errorTitle="Error al bloquear usuario"
      errorDescription="No se pudo bloquear al usuario. Por favor, inténtalo de nuevo."
    >
      {isBlockedUser ? 'Desbloquear usuario' : 'Bloquear usuario'}
    </AsynchRectangleButton>
  );
};

export default BlockUserButton;
