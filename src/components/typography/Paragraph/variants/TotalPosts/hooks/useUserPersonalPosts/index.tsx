import { useState, useEffect } from "react";
import { firebaseWatchUserPersonalPosts } from "../../../../../../../services/firebase/functions/data/snapshot/firebaseWatchUserPersonalPosts";

const useUserPersonalPosts = (profileId: string | undefined) => {
  const [userPersonalPostsData, setUserPersonalPostsData] = useState<any[]>([]);

  useEffect(() => {
    if (profileId !== undefined) {
      const updateUserPersonalPostsData = (newUserPersonalPostsData: any[]) => {
        setUserPersonalPostsData(newUserPersonalPostsData);
      };

      const unsubscribe = firebaseWatchUserPersonalPosts(profileId, updateUserPersonalPostsData);

      return () => unsubscribe();
    }
  }, [profileId]);

  return { userPersonalPostsData };
};

export default useUserPersonalPosts;
