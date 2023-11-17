export interface useUserAuthFunctionsProps {
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
  handlerUserAuth: (user: any) => Promise<void>;
}
