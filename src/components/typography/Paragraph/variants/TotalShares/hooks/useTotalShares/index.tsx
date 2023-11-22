import { useState, useEffect } from 'react';
import { firebaseWatchPostShares } from '../../../../../../../services/firebase/functions/data/snapshot/firebaseWatchPostShares';

const useTotalShares = (postId: string) => {
  const [sharesData, setSharesData] = useState<any[]>([]);

  useEffect(() => {
    const updatesharesData = (newsharesData: any[]) => {
        setSharesData(newsharesData); 
    };

    const unsubscribe = firebaseWatchPostShares(postId, updatesharesData);

    return () => unsubscribe();
  }, [postId]);

  const totalShares = sharesData.length;

  return { totalShares };
};

export default useTotalShares;
