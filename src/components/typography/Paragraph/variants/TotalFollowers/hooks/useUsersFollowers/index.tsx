import { useState, useEffect } from "react";
import { firebaseWatchUsersFollowers } from "../../../../../../../services/firebase/functions/data/snapshot/firebaseWatchUsersFollowers";

const useUsersFollowers = (profileId: string | undefined) => {
  const [followersData, setFollowersData] = useState<any[]>([]);

  useEffect(() => {
    if (profileId !== undefined) {
      const updateFollowersData = (newFollowingData: any[]) => {
        setFollowersData(newFollowingData);
      };

      const unsubscribe = firebaseWatchUsersFollowers(profileId, updateFollowersData);

      return () => unsubscribe();
    }
  }, [profileId]);

  return { followersData };
};

export default useUsersFollowers;
