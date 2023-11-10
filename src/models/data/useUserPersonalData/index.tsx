import { useAppSelector } from "../../../redux/redux-hooks";
import { useUserPersonalDataProps } from "./types";

const useUserPersonalData = (): useUserPersonalDataProps => {
    const userId = useAppSelector((state) => state.userPersonalData.userId);
    const username = useAppSelector((state) => state.userPersonalData.username);
    const biography = useAppSelector((state) => state.userPersonalData.biography);
    const profilePictureURL = useAppSelector((state) => state.userPersonalData.profilePictureURL);
    const profileCoverURL = useAppSelector((state) => state.userPersonalData.profileCoverURL);
    const followers = useAppSelector((state) => state.userPersonalData.followers);
    const following = useAppSelector((state) => state.userPersonalData.following);
    const posts = useAppSelector((state) => state.userPersonalData.posts);
    const accountCreated = useAppSelector((state) => state.userPersonalData.accountCreated);
    const online = useAppSelector((state) => state.userPersonalData.online);

    return {
        userId,
        username,
        biography,
        profilePictureURL,
        profileCoverURL,
        followers,
        following,
        posts,
        accountCreated,
        online
    };
  };
  
  export default useUserPersonalData;
  