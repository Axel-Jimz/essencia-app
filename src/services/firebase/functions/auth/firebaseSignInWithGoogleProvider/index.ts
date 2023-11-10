import { signInWithRedirect } from "firebase/auth";
import { auth, googleProvider } from "../../../config";

export const firebaseSignInWithGoogleProvider = async () => {
  try {
    await signInWithRedirect(auth, googleProvider);
  } catch (error) {
    console.error(error);
  }
};
