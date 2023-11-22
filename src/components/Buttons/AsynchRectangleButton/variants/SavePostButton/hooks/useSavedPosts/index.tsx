import { useState, useEffect } from 'react';
import { firebaseWatchSavedPosts } from '../../../../../../../services/firebase/functions/data/snapshot/firebaseWatchSavedPosts';

const useSavedPosts = (postId: string, userId: string) => {
  const [savedPostsData, setSavedPostsData] = useState<any[]>([]);

  useEffect(() => {
    const updateSavedPostsData  = (newSavedPostsData: any[]) => {
        setSavedPostsData(newSavedPostsData); 
    };

    const unsubscribe = firebaseWatchSavedPosts(userId, updateSavedPostsData);

    return () => unsubscribe();
  }, [postId, userId]); 

  const savedPostsIds = savedPostsData.map(savedPost => savedPost.postId);

  const isSaved = savedPostsIds.includes(postId);

  return { savedPostsData, isSaved };
};

export default useSavedPosts;
