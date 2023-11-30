import { DocumentData, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../config";

export const firebaseSearchUsersByUsername = async (username: string) => {
  const usersCollection = collection(db, "users");
  let data: Array<DocumentData> = [];

  try {
    // Realiza una consulta que busca documentos cuyo campo "username" comience con el valor proporcionado.
    const usersQuery = query(usersCollection, where("username", ">=", username), where("username", "<=", username + "\uf8ff"));

    // Obtiene los datos de los documentos que cumplen con la consulta.
    const querySnapshot = await getDocs(usersQuery);
    querySnapshot.forEach((doc) => {
      data = [...data, doc.data()];
    });
  } catch (error) {
    console.log(error);
  }

  return data;
};
