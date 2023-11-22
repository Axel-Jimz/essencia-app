import { useState, useEffect } from 'react';
import { firebaseWatchPostLikes } from '../../../../../../../services/firebase/functions/data/snapshot/firebaseWatchPostLikes';

const useTotalLikes = (postId: string) => {
  const [likesData, setLikesData] = useState<any[]>([]);

  useEffect(() => {
    const updateLikesData = (newLikesData: any[]) => {
      setLikesData(newLikesData); 
    };

    const unsubscribe = firebaseWatchPostLikes(postId, updateLikesData);

    return () => unsubscribe();
  }, [postId]);

  const totalLikes = likesData.length;

  return { totalLikes };
};

export default useTotalLikes;
