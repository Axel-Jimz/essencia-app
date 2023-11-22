import { useContext, useState, useEffect } from 'react';
import { UserModelContext } from '../../../../../../../state/contexts/UserModelContext';
import { firebaseWatchPostLikes } from '../../../../../../../services/firebase/functions/data/snapshot/firebaseWatchPostLikes';

const usePostLikes = (postId: string, userId: string) => {
  const [likesData, setLikesData] = useState<any[]>([]);

  const { watchPostLikes } = useContext(UserModelContext);

  useEffect(() => {
    const updateLikesData = (newLikesData: any[]) => {
      setLikesData(newLikesData); 
    };

    const unsubscribe = firebaseWatchPostLikes(postId, updateLikesData);

    return () => unsubscribe();
  }, [postId, userId]);

  const likerIds = likesData.map(like => like.likerId);
  const isLiked = likerIds.includes(userId);

  return { likesData, isLiked };
};

export default usePostLikes;
