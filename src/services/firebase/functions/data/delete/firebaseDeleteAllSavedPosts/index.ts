import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../config";

export const firebaseDeleteAllSavedPosts = async (userId: string) => {
  // Obtiene una referencia a la subcolección "savedPosts" del documento del usuario.
  const userSavedPostsRef = collection(doc(db, "users", userId), "savedPosts");

  try {
    // Obtiene los datos de los documentos en la subcolección "savedPosts".
    const querySnapshot = await getDocs(userSavedPostsRef);
    querySnapshot.forEach((doc) => {
      if (doc.id !== "default") {
        deleteDoc(doc.ref);
      }
    });
  } catch (error) {
    console.error("Error al eliminar los posts guardados:", error);
  }
};
