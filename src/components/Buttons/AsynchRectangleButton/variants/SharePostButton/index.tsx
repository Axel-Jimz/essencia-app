import React, { useContext } from "react";
import { SharePostButtonProps } from "./props";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import usePostShares from "./hooks/usePostShares";
import AsynchRectangleButton from "../..";
import ShareIcon from "../../../../icons/ShareIcon";
import { firebaseSharePost } from "../../../../../services/firebase/functions/data/create/firebaseSharePost";

const SharePostButton: React.FC<SharePostButtonProps> = ({ postId }) => {
  const { userId } = useContext(UserModelContext);

  const { isShared } = usePostShares(postId, userId);

  return (
    <AsynchRectangleButton
      onClick={async () => await firebaseSharePost(postId, userId)}
      bg="gray"
      successTitle={isShared ? 'Has eliminado la publicación compartida' : 'Publicación compartida'}
      successDescription={isShared ? 'Publicación eliminada con éxito' : 'Publicación compartida con éxito'}
      errorTitle="Error al compartir publicación"
      errorDescription="La publicación no ha sido compartida"
    >
      <ShareIcon active={isShared} /> {isShared ? 'Compartido' : 'Compartir'}
    </AsynchRectangleButton>
  );
};

export default SharePostButton;
