import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../../config";
import { firebaseGetUsersData } from "../firebaseGetUsersData";

export const firebaseGetPersonalUserSavedPosts = async (userId: string) => {
  const userRef = collection(db, "users", userId, "savedPosts");
  const userPostsQuery = query(userRef);

  let authorIds: Array<string> = [];
  let userSavedPosts: any[] = [];

  try {
    const querySnapshot = await getDocs(userPostsQuery);

    querySnapshot.forEach((doc) => {
      const postData = doc.data();

      if (Object.keys(postData).length > 0) {
        userSavedPosts.push(postData);
        const authorId = postData.authorId;
        if (authorId) {
          authorIds.push(authorId);
        }
      }
    });

    const usersData = await firebaseGetUsersData(authorIds);

    userSavedPosts.forEach((post) => {
      const authorData = usersData.find(
        (user) => user.userId === post.authorId
      );
      if (authorData) {
        post.authorData = authorData;
      }
    });

    return userSavedPosts;
  } catch (error) {
    console.error("Error al obtener los posts guardados del usuario:", error);
    return [];
  }
};
