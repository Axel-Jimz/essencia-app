import { signOut } from "firebase/auth";
import { auth } from "../../../config";

export const firebaseSignOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};