import { useState, useEffect } from 'react';
import { firebaseWatchPostReports } from '../../../../../../../services/firebase/functions/data/snapshot/firebaseWatchPostReports';

const usePostReports = (postId: string, userId: string) => {
  const [reportsData, setReportsData] = useState<any[]>([]);

  useEffect(() => {
    const updateReportsData = (newReportsData: any[]) => {
        setReportsData(newReportsData); 
    };

    const unsubscribe = firebaseWatchPostReports(postId, updateReportsData);

    return () => unsubscribe();
  }, [postId, userId]);

  const reporterIds = reportsData.map(report => report.reporterId);
  const isReported = reporterIds.includes(userId);

  return { reportsData, isReported };
};

export default usePostReports;
