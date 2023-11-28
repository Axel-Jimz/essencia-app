import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../../config";
import { firebaseGetPersonalData } from "../firebaseGetPersonalData";

export const firebaseGetPersonalUserPosts = async (userId: string) => {
  const postsRef = collection(db, "posts");
  const userPostsQuery = query(postsRef, where("authorId", "==", userId));

  let userPosts: any[] = [];

  try {
    const userData = await firebaseGetPersonalData(userId);
    const querySnapshot = await getDocs(userPostsQuery);
    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      const combinedData = { ...postData, userData };
      userPosts.push(combinedData);
    });

    return userPosts;
  } catch (error) {
    console.error("Error al obtener los posts del usuario:", error);
  }
};
