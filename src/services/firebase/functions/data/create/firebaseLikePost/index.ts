// Importamos las funciones necesarias de Firebase
import { collection, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

// Importamos la variable de configuración de Firebase
import { db } from "../../../../config";

// Esta función permite a un usuario dar like a un post.
export const firebaseLikePost = async (postId: string, likerId: string) => {
  // Obtiene la referencia al documento del post.
  const postDocRef = doc(db, "posts", postId);

  // Obtiene la referencia a la subcolección de likes.
  const postLikesCollectionRef = collection(postDocRef, "likes");

  // Obtiene la referencia al documento del like.
  const likerLikeDocRef = doc(postLikesCollectionRef, likerId);

  try {
    // Obtiene el documento del like.
    const existingLikeDoc = await getDoc(likerLikeDocRef);

    // Si el like ya existe, lo elimina.
    if (existingLikeDoc.exists()) {
      await deleteDoc(likerLikeDocRef);
    } else {
      // Si el like no existe, lo agrega.
      await setDoc(likerLikeDocRef, { likerId: likerId });
    }
  } catch (error) {
    console.error("Error al agregar o eliminar el like:", error);
  }
};