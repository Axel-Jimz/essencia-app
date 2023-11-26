import { useState, useEffect } from 'react';
import { firebaseWatchViewedNotifications } from '../../../../../../../services/firebase/functions/data/snapshot/firebaseWatchViewedNotifications';

const useViewedNotifications = (userId: string) => {
  const [viewedNotificationsData, setViewedNotificationsData] = useState<any[]>([]);

  useEffect(() => {
    const updatesetViewedNotificationsData  = (newPersonalNotificationsData: any[]) => {
        setViewedNotificationsData(newPersonalNotificationsData); 
    };

    const unsubscribe = firebaseWatchViewedNotifications(userId, updatesetViewedNotificationsData);

    return () => unsubscribe();
  }, [userId]); 


  return { viewedNotificationsData };
};

export default useViewedNotifications;
