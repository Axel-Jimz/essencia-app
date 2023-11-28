// Importa los módulos necesarios de Firebase Firestore.
import { DocumentData, collection, getDocs, query, where } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función obtiene los datos de los posts cuyos IDs se pasan como argumento.
export const firebaseGetPostsData = async (postIds: Array<string>) => {
  // Obtiene una referencia a la colección "posts".
  const postsCollection = collection(db, "posts");

  let data: Array<DocumentData> = [];

  // Crea una consulta que busca documentos cuyo campo "postId" está incluido en el array de IDs de post.
  const postsQuery = query(postsCollection, where("postId", "in", postIds));

  try {
    // Obtiene los datos de los documentos que cumplen con la consulta.
    const querySnapshot = await getDocs(postsQuery);
    querySnapshot.forEach((doc) => {
      data = [...data, doc.data()];
    });
  } catch (error) {
    console.log(error);
  }

  return data;
};
