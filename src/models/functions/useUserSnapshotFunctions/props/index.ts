import { Unsubscribe } from "firebase/firestore";

export interface useUserSnapshotFunctionsProps {
    watchBlockedUsers: (userId: string, callback: (blockedUsersData: any[]) => void) =>  Unsubscribe;
    watchPostLikes: (postId: string, callback: (likesData: any[]) => void) => void;
    watchPostReports: (postId: string, callback: (reportsData: any[]) => void) => Unsubscribe;
    watchPostShares: (postId: string, callback: (sharesData: any[]) => void) => Unsubscribe;
    watchSavedPosts: (postId: string, callback: (savedPostsData: any[]) => void) => Unsubscribe;
}