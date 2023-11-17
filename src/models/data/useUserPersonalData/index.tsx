import { useAppSelector } from "../../../redux/redux-hooks";
import { useUserPersonalDataProps } from "./props";

const useUserPersonalData = (): useUserPersonalDataProps => {
    const userId = useAppSelector((state) => state.userPersonalData.userId);
    const username = useAppSelector((state) => state.userPersonalData.username);
    const biography = useAppSelector((state) => state.userPersonalData.biography);
    const profilePictureURL = useAppSelector((state) => state.userPersonalData.profilePictureURL);
    const followers = useAppSelector((state) => state.userPersonalData.followers);
    const following = useAppSelector((state) => state.userPersonalData.following);
    const posts = useAppSelector((state) => state.userPersonalData.posts);
    const savedPosts = useAppSelector((state) => state.userPersonalData.savedPosts);
    const sharedPosts = useAppSelector((state) => state.userPersonalData.sharedPosts);
    const blockedUsers = useAppSelector((state) => state.userPersonalData.blockedUsers);
    const notifications = useAppSelector((state) => state.userPersonalData.notifications);
    const viewedNotifications = useAppSelector((state) => state.userPersonalData.viewedNotifications);
    const accountCreated = useAppSelector((state) => state.userPersonalData.accountCreated);

    return {
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
    };
  };
  
  export default useUserPersonalData;
  