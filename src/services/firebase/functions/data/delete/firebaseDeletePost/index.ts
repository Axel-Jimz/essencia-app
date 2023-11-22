// Importa los módulos necesarios de Firebase Firestore.
import { doc, deleteDoc } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función elimina un post específico de la base de datos de Firebase Firestore.
export const firebaseDeletePost = async (postId: string) => {
  // Obtiene una referencia al documento del post.
  const postDocRef = doc(db, "posts", postId);

  try {
    // Elimina el post de la base de datos de Firebase Firestore.
    await deleteDoc(postDocRef);
  } catch (error) {
    console.error("Error al eliminar el post:", error);
  }
}
