import useUserInterfaceData from "../../data/useUserInterfaceData";
import useUserInterfaceFunctions from "../../functions/useUserInterfaceFunctions";

import useUserAuthFunctions from "../../functions/useUserAuthFunctions";

import useUserPersonalData from "../../data/useUserPersonalData";
import useUserPersonalDataFunctions from "../../functions/useUserPersonalDataFunctions";

import { useUserModelProps } from "./props";

const useUserModel = (): useUserModelProps => {

    const { theme } = useUserInterfaceData();
    const { changeTheme } = useUserInterfaceFunctions();

    const { signInWithGoogle, signOutUser } = useUserAuthFunctions();

    const { userId, username, biography, profilePictureURL, profileCoverURL, followers, following, posts, accountCreated, online } = useUserPersonalData();

    const { changeUserId, changeUsername, changeBiography, changeProfilePictureURL, changeProfileCoverURL, changeFollowers, changeFollowing, changePosts, changeAccountCreated, changeOnlineStatus } = useUserPersonalDataFunctions();


    return {
        /* User Interface */
        theme,
        /* User Interface - Functions*/
        changeTheme,
        /* User Auth - Functions */
        signInWithGoogle,
        signOutUser,
        /* User Personal Data */
        userId,
        username,
        biography,
        profilePictureURL,
        profileCoverURL,
        followers,
        following,
        posts,
        accountCreated,
        online,
        /* User Personal Data  Functions */
        changeUserId,
        changeUsername,
        changeBiography,
        changeProfilePictureURL,
        changeProfileCoverURL,
        changeFollowers,
        changeFollowing,
        changePosts,
        changeAccountCreated,
        changeOnlineStatus,
    };
  };
  
  export default useUserModel;
  