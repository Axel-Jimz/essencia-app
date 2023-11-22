import { useUserModelProps } from "./props";

import useUserInterfaceData from "../../data/useUserInterfaceData";
import useUserInterfaceFunctions from "../../functions/useUserInterfaceFunctions";

import useUserAuthFunctions from "../../functions/useUserAuthFunctions";

import useUserPersonalData from "../../data/useUserPersonalData";
import useUserPersonalDataFunctions from "../../functions/useUserPersonalDataFunctions";

import useUserCreateFunctions from "../../functions/useUserCreateFunctions";
import useUserReadFunctions from "../../functions/useUserReadFunctions";
import useUserSnapshotFunctions from "../../functions/useUserSnapshotFunctions";

const useUserModel = (): useUserModelProps => {

    const { theme, mobileHomeNavbarVisibility } = useUserInterfaceData();
    const { changeTheme, toggleMobileHomeNavbarVisibility } = useUserInterfaceFunctions();

    const { signInWithGoogle, signOutUser, handlerUserAuth, } = useUserAuthFunctions();

    const { userId, username, biography, profilePictureURL, followers, following, posts, savedPosts, sharedPosts, blockedUsers, notifications, viewedNotifications,  accountCreated } = useUserPersonalData();
    const { changeUserId, changeUsername, changeBiography, changeProfilePictureURL, changeFollowers, changeFollowing, changePosts, changeSavedPosts, changeSharedPosts, changeBlockedUsers, changeNotifications, changeViewedNotifications, changeAccountCreated, updateUserPersonalData } = useUserPersonalDataFunctions();

    const { createPost } = useUserCreateFunctions();

    const { getPersonalData } = useUserReadFunctions();

    const { watchBlockedUsers, watchPostLikes, watchPostReports, watchPostShares, watchSavedPosts } = useUserSnapshotFunctions();


    return {
        /* User Interface */
        theme,
        mobileHomeNavbarVisibility,
        /* User Interface - Functions*/
        changeTheme,
        toggleMobileHomeNavbarVisibility,
        /* User Auth - Functions */
        signInWithGoogle,
        signOutUser,
        handlerUserAuth,
        /* User Personal Data */
        userId,
        username,
        biography,
        profilePictureURL,
        followers,
        following,
        posts,
        savedPosts,
        sharedPosts,
        blockedUsers,
        notifications,
        viewedNotifications,
        accountCreated,
        /* User Personal Data  Functions */
        changeUserId,
        changeUsername,
        changeBiography,
        changeProfilePictureURL,
        changeFollowers,
        changeFollowing,
        changePosts,
        changeSavedPosts,
        changeSharedPosts,
        changeBlockedUsers,
        changeNotifications,
        changeViewedNotifications,
        changeAccountCreated,
        updateUserPersonalData,
        /* User Create Functions */
        createPost,
        /* User read Functions */
        getPersonalData,
        /* User Snapshot Functions */
        watchBlockedUsers,
        watchPostLikes,
        watchPostReports,
        watchPostShares,
        watchSavedPosts
    };
  };
  
  export default useUserModel;
  