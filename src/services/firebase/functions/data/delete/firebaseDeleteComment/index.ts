// Importa los módulos necesarios de Firebase Firestore.
import { doc, deleteDoc, collection } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función elimina un comentario específico de un post en la base de datos de Firebase Firestore.
export const firebaseDeleteComment = async (postId: string, commentId: string) => {
  // Obtiene una referencia al documento del comentario.
  const commentDocRef = doc(collection(db, "posts", postId, "comments"), commentId);

  try {
    // Elimina el documento del comentario.
    await deleteDoc(commentDocRef);
  } catch (error) {
    console.error("Error al eliminar el comentario:", error);
  }
}
