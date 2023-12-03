import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../../config";
import { firebaseGetNonUsersData } from "../firebaseGetNonUsersData";

export const firebaseGetSuggestedUsers = async (userId: string) => {
  const userRef = collection(db, "users", userId, "following");
  const userPostsQuery = query(userRef);

  let authorIds: Array<string> = [userId];
  let suggestedUsers: any[] = [];

  try {
    const querySnapshot = await getDocs(userPostsQuery);

    querySnapshot.forEach((doc) => {
      const suggestedData = doc.data();

      if (Object.keys(suggestedData).length > 0) {
        suggestedUsers.push(suggestedData);
        const authorId = suggestedData.followed;
        if (authorId) {
          authorIds.push(authorId);
        }
      }
    });

    const usersData = await firebaseGetNonUsersData(authorIds);
  
    return usersData;
  } catch (error) {
    console.error("Error al obtener los posts guardados del usuario:", error);
    return [];
  }
};
