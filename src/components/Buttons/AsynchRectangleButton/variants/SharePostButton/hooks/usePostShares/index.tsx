import { useState, useEffect } from 'react';
import { firebaseWatchPostShares } from '../../../../../../../services/firebase/functions/data/snapshot/firebaseWatchPostShares';

const usePostShares = (postId: string, userId: string) => {
  const [sharesData, setSharesData] = useState<any[]>([]);

  useEffect(() => {
    const updateSharesData = (newSharesData: any[]) => {
      setSharesData(newSharesData); 
    };

    const unsubscribe = firebaseWatchPostShares(postId, updateSharesData);

    return () => unsubscribe();
  }, [postId, userId]);

  const sharerIds = sharesData.map(share => share.sharerId);
  const isShared = sharerIds.includes(userId);

  return { sharesData, isShared };
};

export default usePostShares;
