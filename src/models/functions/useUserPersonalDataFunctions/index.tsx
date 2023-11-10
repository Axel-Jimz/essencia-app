import { useAppDispatch } from "../../../redux/redux-hooks";
import { useUserPersonalDataFunctionsProps } from "./props";

import { setAccountCreated, setBiography, setFollowers, setFollowing, setOnlineStatus, setPosts, setProfileCoverURL, setProfilePictureURL, setUserId, setUsername } from "../../../redux/features/userPersonalDataSlice"

const useUserPersonalDataFunctions = (): useUserPersonalDataFunctionsProps => {
    const dispatch = useAppDispatch();

    const changeUserId = (value: string) => dispatch(setUserId(value));
    const changeUsername = (value: string) => dispatch(setUsername(value));
    const changeBiography = (value: string) => dispatch(setBiography(value));
    const changeProfilePictureURL = (value: string) => dispatch(setProfilePictureURL(value));
    const changeProfileCoverURL = (value: string) => dispatch(setProfileCoverURL(value));
    const changeFollowers = (value: {}[]) => dispatch(setFollowers(value));
    const changeFollowing = (value: {}[]) => dispatch(setFollowing(value));
    const changePosts = (value: {}[]) => dispatch(setPosts(value));
    const changeAccountCreated = (value: string) => dispatch(setAccountCreated(value));
    const changeOnlineStatus = (value: boolean) => dispatch(setOnlineStatus(value));

    return {
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
  
  export default useUserPersonalDataFunctions;
  