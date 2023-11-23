import { useState, useEffect } from 'react';
import { firebaseWatchPostComments } from '../../../../../../../services/firebase/functions/data/snapshot/firebaseWatchPostComments';

const useTotalComments = (postId: string) => {
  const [commentsData, setCommentsData] = useState<any[]>([]);

  useEffect(() => {
    const updateCommentsData = (newCommentsData: any[]) => {
        setCommentsData(newCommentsData); 
    };

    const unsubscribe = firebaseWatchPostComments(postId, updateCommentsData);

    return () => unsubscribe();
  }, [postId]);

  const totalComments = commentsData.length;

  return { totalComments };
};

export default useTotalComments;
