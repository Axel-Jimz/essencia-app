import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../../config";
import { firebaseGetUsersData } from "../firebaseGetUsersData";

export const firebaseGetPersonalUserSharedPosts = async (userId: string) => {
  const userRef = collection(db, "users", userId, "sharedPosts");
  const userPostsQuery = query(userRef);

  let authorIds: Array<string> = [];
  let userSharedPosts: any[] = [];

  try {
    const querySnapshot = await getDocs(userPostsQuery);

    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      if (Object.keys(postData).length > 0) {
        userSharedPosts.push(postData);
        const authorId = postData.authorId;
        if (authorId) {
          authorIds.push(authorId);
        }
      }
    });

    const usersData = await firebaseGetUsersData(authorIds);

    userSharedPosts.forEach((post) => {
      const authorData = usersData.find(
        (user) => user.userId === post.authorId
      );
      if (authorData) {
        post.authorData = authorData;
      }
    });

    return userSharedPosts;
  } catch (error) {
    console.error("Error al obtener los posts compartidos del usuario:", error);
    return [];
  }
};
