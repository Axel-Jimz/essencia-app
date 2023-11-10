export interface useUserAuthFunctionsProps {
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
}
