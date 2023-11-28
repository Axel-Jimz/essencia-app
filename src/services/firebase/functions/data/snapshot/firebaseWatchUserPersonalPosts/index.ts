// Importa los módulos necesarios de Firebase Firestore.
import { collection, onSnapshot, query, where } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función observa los cambios en la colección "posts" filtrando por el "authorId" (userId) y llama a la función de devolución de llamada con los datos de los posts del usuario.
export const firebaseWatchUserPersonalPosts = (userId: string, callback: (userPosts: any[]) => void) => {
  // Crea una consulta para obtener los posts del usuario específico.
  const postsRef = collection(db, "posts");
  const userPostsQuery = query(postsRef, where("authorId", "==", userId));

  // Observa los cambios en la colección "posts" filtrando por el "authorId" (userId).
  return onSnapshot(userPostsQuery, (snapshot) => {
    const userPosts: any[] = [];

    snapshot.forEach((doc) => {
      const postData = doc.data();
      userPosts.push(postData);
    });

    // Llama a la función de devolución de llamada con los datos de los posts del usuario.
    callback(userPosts);
  });
};
