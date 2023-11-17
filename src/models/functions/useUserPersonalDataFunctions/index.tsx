import { useAppDispatch } from "../../../redux/redux-hooks";
import { useUserPersonalDataFunctionsProps } from "./props";

import { setAccountCreated, setBiography, setFollowers, setFollowing, setPosts, setSavedPosts, setSharedPosts, setBlockedUsers, setNotifications, setViewedNotifications, setProfilePictureURL, setUserId, setUsername } from "../../../redux/features/userPersonalDataSlice"

const useUserPersonalDataFunctions = (): useUserPersonalDataFunctionsProps => {
    const dispatch = useAppDispatch();

    const changeUserId = (value: string) => dispatch(setUserId(value));
    const changeUsername = (value: string) => dispatch(setUsername(value));
    const changeBiography = (value: string) => dispatch(setBiography(value));
    const changeProfilePictureURL = (value: string) => dispatch(setProfilePictureURL(value));
    const changeFollowers = (value: {}[]) => dispatch(setFollowers(value));
    const changeFollowing = (value: {}[]) => dispatch(setFollowing(value));
    const changePosts = (value: {}[]) => dispatch(setPosts(value));
    const changeSavedPosts = (value: {}[]) => dispatch(setSavedPosts(value));
    const changeSharedPosts = (value: {}[]) => dispatch(setSharedPosts(value));
    const changeBlockedUsers = (value: {}[]) => dispatch(setBlockedUsers(value));
    const changeNotifications = (value: {}[]) => dispatch(setNotifications(value));
    const changeViewedNotifications = (value: boolean) => dispatch(setViewedNotifications(value));
    const changeAccountCreated = (value: string) => dispatch(setAccountCreated(value));

    return {
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
    };
  };
  
  export default useUserPersonalDataFunctions;
  