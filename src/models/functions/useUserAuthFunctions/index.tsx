import { firebaseSignInWithGoogleProvider } from "../../../services/firebase/functions/auth/firebaseSignInWithGoogleProvider";
import { firebaseSignOutUser } from "../../../services/firebase/functions/auth/firebaseSignOutUser";
import { firebaseHandlerUserAuth } from "../../../services/firebase/functions/auth/firebaseHandlerUserAuth";
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

  const handlerUserAuth = async (user: any) => {
    try {
      await firebaseHandlerUserAuth(user);
    } catch (error) {
      console.log(error)
    }
  }

  return {
    signInWithGoogle,
    signOutUser,
    handlerUserAuth,
  };
};

export default useUserAuthFunctions;
