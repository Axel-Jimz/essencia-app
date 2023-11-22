import { firebaseWatchBlockedUsers } from "../../../services/firebase/functions/data/snapshot/firebaseWatchBlockedUsers";
import { firebaseWatchPostLikes } from "../../../services/firebase/functions/data/snapshot/firebaseWatchPostLikes";
import { firebaseWatchPostReports } from "../../../services/firebase/functions/data/snapshot/firebaseWatchPostReports";
import { firebaseWatchPostShares } from "../../../services/firebase/functions/data/snapshot/firebaseWatchPostShares";
import { firebaseWatchSavedPosts } from "../../../services/firebase/functions/data/snapshot/firebaseWatchSavedPosts";
import { useUserSnapshotFunctionsProps } from "./props";

const useUserSnapshotFunctions = (): useUserSnapshotFunctionsProps => {
  const watchBlockedUsers = (userId: string, callback: (blockedUsersData: any[]) => void) => {
    return firebaseWatchBlockedUsers(userId, callback);
  };

  const watchPostLikes = async (postId: string, callback: (likesData: any[]) => void) => {
    return firebaseWatchPostLikes(postId, callback);
  };

  const watchPostReports = async (postId: string, callback: (reportsData: any[]) => void) => {
    return firebaseWatchPostReports(postId, callback);
  };

  const watchPostShares = async (postId: string, callback: (sharesData: any[]) => void) => {
    return firebaseWatchPostShares(postId, callback);
  };

  const watchSavedPosts = async (postId: string,callback: (savedPostsData: any[]) => void) => {
    return firebaseWatchSavedPosts(postId, callback);
  };

  return {
    watchBlockedUsers,
    watchPostLikes,
    watchPostReports,
    watchPostShares,
    watchSavedPosts,
  };
};

export default useUserSnapshotFunctions;
