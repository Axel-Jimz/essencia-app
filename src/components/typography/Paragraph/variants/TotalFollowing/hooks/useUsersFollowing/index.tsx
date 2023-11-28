import { useState, useEffect } from "react";
import { firebaseWatchUsersFollowing } from "../../../../../../../services/firebase/functions/data/snapshot/firebaseWatchUsersFollowing";

const useUsersFollowing = (profileId: string | undefined) => {
  const [followingData, setFollowingData] = useState<any[]>([]);

  useEffect(() => {
    if (profileId !== undefined) {
      const updateFollowingData = (newFollowingData: any[]) => {
        setFollowingData(newFollowingData);
      };

      const unsubscribe = firebaseWatchUsersFollowing(profileId, updateFollowingData);

      return () => unsubscribe();
    }
  }, [profileId]);
  
  return { followingData };
};

export default useUsersFollowing;
