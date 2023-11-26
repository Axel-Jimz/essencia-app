import React, {useContext} from "react";
import { FollowUserButtonProps } from "./props";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import AsynchRectangleButton from "../..";
import { firebaseFollowUser } from "../../../../../services/firebase/functions/data/create/firebaseFollowUser";
import useUsersFollowing from "./hooks/useUsersFollowing";


const FollowUserButton: React.FC<FollowUserButtonProps> = ({ authorId }) => {
  const { userId } = useContext(UserModelContext)

  const { isFollowed } = useUsersFollowing(userId, authorId)

    return (
      <AsynchRectangleButton
      onClick={async () => await firebaseFollowUser(userId, authorId)}
      bg="blue"
      unstyled={true}
      successTitle={isFollowed ? "Dejaste de seguir al usuario" : "Comenzaste a seguir al usuario"}
      successDescription={isFollowed ? "Ya no seguirás las actualizaciones de este usuario." : "Ahora seguirás las actualizaciones de este usuario."}
      errorTitle="Error al seguir al usuario"
      errorDescription="No se pudo seguir al usuario. Por favor, inténtalo de nuevo."
    >
      {isFollowed ? "Siguiendo" : "Seguir"}
    </AsynchRectangleButton>
    );
  };
  
  export default FollowUserButton;
  