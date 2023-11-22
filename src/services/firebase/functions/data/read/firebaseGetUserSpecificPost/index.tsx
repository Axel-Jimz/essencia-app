// Importa los módulos necesarios de Firebase Firestore.
import { doc, getDoc } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función obtiene los datos de un post específico de la base de datos de Firebase Firestore.
export const firebaseGetUserSpecificPost = async (postId: string) => {
  // Obtiene una referencia al documento del post.
  const postsRefeference = doc(db, "posts", postId);

  let data;

  try {
    // Obtiene los datos del documento del post.
    data = (await getDoc(postsRefeference)).data();
  } catch (error) {
    console.log(error);
  }

  return data;
};
