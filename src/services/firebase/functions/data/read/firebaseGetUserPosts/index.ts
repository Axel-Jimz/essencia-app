// Importa los módulos necesarios de Firebase Firestore.
import { DocumentData, collection, getDocs } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función obtiene todos los posts de la base de datos de Firebase Firestore.
export const firebaseGetUserPosts = async () => {
  // Obtiene una referencia a la colección "posts".
  const postsCollection = collection(db, "posts");

  let data: Array<DocumentData> = [];

  try {
    // Obtiene una instantánea de la colección "posts".
    const querySnapshot = await getDocs(postsCollection);

    // Itera sobre cada documento en la instantánea.
    querySnapshot.forEach((doc) => {
      // Si el documento tiene datos, agrega los datos a la matriz "data".
      if (Object.keys(doc.data()).length > 0) {
        data = [...data, doc.data()];
      }
    });
  } catch (error) {
    console.log(error);
  }

  return data;
};
