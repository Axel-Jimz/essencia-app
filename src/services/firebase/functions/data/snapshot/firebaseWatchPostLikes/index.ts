// Importa los módulos necesarios de Firebase Firestore.
import { collection, doc, onSnapshot } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función observa los cambios en la colección "likes" de un post específico y llama a la función de devolución de llamada con los datos de los likes.
export const firebaseWatchPostLikes = (postId: string, callback: (likesData: any[]) => void) => {
  // Obtiene una referencia al documento del post.
  const postRef = doc(db, "posts", postId);

  // Obtiene una referencia a la colección "likes" del post.
  const likesRef = collection(postRef, "likes");

  // Observa los cambios en la colección "likes".
  return onSnapshot(likesRef, (snapshot) => {
    const likesData: any[] = [];

    // Itera sobre cada documento en la colección "likes".
    snapshot.forEach((doc) => {
      const data = doc.data();

      // Si el documento tiene datos, agrega los datos a la matriz "likesData".
      if (Object.keys(data).length > 0) { 
        likesData.push(data);
      }
    });

    // Llama a la función de devolución de llamada con los datos de los likes.
    callback(likesData);
  });
}
