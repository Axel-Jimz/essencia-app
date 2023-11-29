import { collection, doc, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../config";

export const firebaseDeleteAllSharedPosts = async (userId: string) => {
  // Obtiene una referencia a la colección "sharedPosts" del usuario.
  const sharedPostsCollectionRef = collection(doc(db, "users", userId), "sharedPosts");

  try {
    // Obtiene los IDs de todas las publicaciones compartidas por el usuario.
    const sharedPostsQuery = query(sharedPostsCollectionRef);
    const sharedPostsSnapshot = await getDocs(sharedPostsQuery);

    // Elimina todas las publicaciones compartidas y sus referencias en la colección "shares".
    sharedPostsSnapshot.forEach(async (sharedPostDoc) => {
      const postId = sharedPostDoc.id;
      const postSharesCollectionRef = collection(doc(db, "posts", postId), "shares");
      const userShareDocRef = doc(postSharesCollectionRef, userId);

      if (sharedPostDoc.id !== "default") {
        await deleteDoc(userShareDocRef);
        await deleteDoc(sharedPostDoc.ref);
      }
    });
  } catch (error) {
    console.error("Error al eliminar las publicaciones compartidas:", error);
  }
};
