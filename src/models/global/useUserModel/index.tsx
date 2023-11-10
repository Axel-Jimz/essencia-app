import useUserInterfaceData from "../../data/useUserInterfaceData";
import useUserPersonalData from "../../data/useUserPersonalData";
import useUserInterfaceFunctions from "../../functions/useUserInterfaceFunctions";
import useUserPersonalDataFunctions from "../../functions/useUserPersonalDataFunctions";
import { useUserModelProps } from "./types";

const useUserModel = (): useUserModelProps => {

    const { theme } = useUserInterfaceData();
    const { changeTheme } = useUserInterfaceFunctions();

    const { userId, username, biography, profilePictureURL, profileCoverURL, followers, following, posts, accountCreated, online } = useUserPersonalData();

    const { changeUserId, changeUsername, changeBiography, changeProfilePictureURL, changeProfileCoverURL, changeFollowers, changeFollowing, changePosts, changeAccountCreated, changeOnlineStatus } = useUserPersonalDataFunctions();


    return {
        /* User Interface */
        theme,
        /* User Interface - Functions*/
        changeTheme,
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
        changeOnlineStatus
    };
  };
  
  export default useUserModel;
  