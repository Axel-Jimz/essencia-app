// Importamos las funciones necesarias de Firebase
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../../config";

export const firebaseGetPersonalData = async (user: any) => {
  const userRefeference = doc(db, "users", user.uid);
  let data;

  try {
    data = (await getDoc(userRefeference)).data();
  } catch (error) {
    console.log(error);
  }

  return data;
};
