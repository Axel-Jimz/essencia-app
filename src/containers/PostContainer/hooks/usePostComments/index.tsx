import { useState, useEffect } from 'react';
import { firebaseWatchPostComments } from '../../../../services/firebase/functions/data/snapshot/firebaseWatchPostComments';

const usePostComments = (postId: string) => {
  const [commentsData, setCommentsData] = useState<any[]>([]);

  useEffect(() => {
    const updateCommentsData = (newCommentsData: any[]) => {
      setCommentsData(newCommentsData); 
    };

    const unsubscribe = firebaseWatchPostComments(postId, updateCommentsData); 
    
    return () => unsubscribe();
  }, [postId]);

  return { commentsData };
};

export default usePostComments;
