// Importa los módulos necesarios de Firebase Firestore.
import { DocumentData, collection, getDocs, query, where } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función obtiene los datos de los usuarios cuyos IDs se pasan como argumento.
export const firebaseGetUsersData = async (userIds: Array<string>) => {
  // Obtiene una referencia a la colección "users".
  const usersCollection = collection(db, "users");

  let data: Array<DocumentData> = [];

  if (userIds.length <= 0) {
    return []; 
  }

  // Crea una consulta que busca documentos cuyo campo "userId" está incluido en el array de IDs de usuario.
  const usersQuery = query(usersCollection, where("userId", "in", userIds));

  try {
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
