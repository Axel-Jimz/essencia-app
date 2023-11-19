export interface useUserPersonalDataFunctionsProps {
  changeUserId: (value: string) => void;
  changeUsername: (value: string) => void;
  changeBiography: (value: string) => void;
  changeProfilePictureURL: (value: string) => void;
  changeFollowers: (value: {}[]) => void;
  changeFollowing: (value: {}[]) => void;
  changePosts: (value: {}[]) => void;
  changeSavedPosts: (value: {}[]) => void;
  changeSharedPosts: (value: {}[]) => void;
  changeBlockedUsers: (value: {}[]) => void;
  changeNotifications: (value: {}[]) => void;
  changeViewedNotifications: (value: boolean) => void;
  changeAccountCreated: (value: string) => void;
  updateUserPersonalData: (data: any) => void;
}
