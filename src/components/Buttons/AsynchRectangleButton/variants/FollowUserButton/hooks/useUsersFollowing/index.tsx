import { useState, useEffect } from "react";
import { firebaseWatchUsersFollowing } from "../../../../../../../services/firebase/functions/data/snapshot/firebaseWatchUsersFollowing";

const useUsersFollowing = (userId: string, authorId: string) => {
  const [followingData, setFollowingData] = useState<any[]>([]);

  useEffect(() => {
    const updateFollowingData = (newFollowingData: any[]) => {
      setFollowingData(newFollowingData);
    };

    const unsubscribe = firebaseWatchUsersFollowing(userId, updateFollowingData);

    return () => unsubscribe();
  }, [userId]);

  const followedUsersIds = followingData.map(following => following.followed);
  const isFollowed= followedUsersIds.includes(authorId);

  return { followingData, isFollowed };
};

export default useUsersFollowing;
