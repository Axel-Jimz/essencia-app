// Importa los módulos necesarios de Firebase Firestore.
import { collection, doc, setDoc, deleteDoc, getDoc } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Importa la función firebaseGetUserSpecificPost para obtener los datos de un post específico.
import { firebaseGetUserSpecificPost } from './../../read/firebaseGetUserSpecificPost/index';

// Esta función guarda o elimina un post específico en la colección "savedPosts" de un usuario específico.
export const firebaseSavePost = async (postId: string, saverId: string) => {
  // Obtiene una referencia al documento del usuario que guarda el post.
  const saverUserDocRef = doc(db, "users", saverId);

  // Obtiene una referencia a la colección "savedPosts" del usuario.
  const savedPostsCollectionRef = collection(saverUserDocRef, "savedPosts");

  // Obtiene una referencia al documento del post guardado.
  const savedPostDocRef = doc(savedPostsCollectionRef, postId);

  try {
    const existingSavedPostDoc = await getDoc(savedPostDocRef);
    const postData = await firebaseGetUserSpecificPost(postId);

    if (existingSavedPostDoc.exists()) {
      // Si el post ya está guardado, se elimina.
      await deleteDoc(savedPostDocRef);
    } else {
      // Si el post no está guardado, se guarda.
      await setDoc(savedPostDocRef, postData);
    }
  } catch (error) {
    console.error("Error guardando el post:", error);
  }
}
