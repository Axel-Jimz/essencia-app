import { collection, query, getDocs, DocumentData, where } from "firebase/firestore";
import { db } from "../../../../config";

export const firebaseGetNonUsersData = async (excludedUserIds: Array<string>) => {
    const usersCollection = collection(db, "users");
    let data: Array<DocumentData> = [];
  
    if (excludedUserIds.length <= 0) {
      return [];
    }
  
    const usersQuery = query(usersCollection, where("userId", "not-in", excludedUserIds));
  
    try {
      const querySnapshot = await getDocs(usersQuery);
      querySnapshot.forEach((doc) => {
        data = [...data, doc.data()];
      });
    } catch (error) {
      console.log(error);
    }
  
    return data;
  };
  