import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../config";
import { firebaseRegisterUser } from "../../data/create/firebaseCreateNewUser";

export const firebaseHandlerUserAuth = async (user: any) => {
  const userRefeference = doc(db, "users", user.uid);
  const docSnap = await getDoc(userRefeference);

  if (!docSnap.exists()) {
    await firebaseRegisterUser(user);
    return;
  }

  return;
};
