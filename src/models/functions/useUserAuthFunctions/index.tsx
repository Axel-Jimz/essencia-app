import { firebaseSignInWithGoogleProvider } from "../../../services/firebase/functions/auth/firebaseSignInWithGoogleProvider";
import { firebaseSignOutUser } from "../../../services/firebase/functions/auth/firebaseSignOutUser";
import { useUserAuthFunctionsProps } from "./props";

const useUserAuthFunctions = (): useUserAuthFunctionsProps => {
  const signInWithGoogle = async () => {
    try {
      await firebaseSignInWithGoogleProvider();
    } catch (error) {
      console.error(error);
    }
  };

  const signOutUser = async () => {
    try {
      await firebaseSignOutUser();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    signInWithGoogle,
    signOutUser,
  };
};

export default useUserAuthFunctions;
