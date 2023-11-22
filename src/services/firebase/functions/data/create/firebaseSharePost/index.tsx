// Importa los módulos necesarios de Firebase Firestore.
import { collection, doc, setDoc, deleteDoc, getDoc } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Importa la función firebaseGetUserSpecificPost para obtener los datos de un post específico.
import { firebaseGetUserSpecificPost } from "../../read/firebaseGetUserSpecificPost";

// Esta función guarda o elimina un post específico en la colección "sharedPosts" de un usuario específico.
export const firebaseSharePost = async (postId: string, sharerId: string) => {
  // Obtiene una referencia al documento del usuario que comparte el post.
  const sharerUserDocRef = doc(db, "users", sharerId);

  // Obtiene una referencia al documento del post.
  const postDocRef = doc(db, "posts", postId);

  // Obtiene una referencia a la colección "sharedPosts" del usuario.
  const sharedPostsCollectionRef = collection(sharerUserDocRef, "sharedPosts");

  // Obtiene una referencia a la colección "shares" del post.
  const postSharesCollectionRef = collection(postDocRef, "shares");
  
  // Obtiene una referencia al documento del post compartido.
  const sharedPostDocRef = doc(sharedPostsCollectionRef, postId);

  // Obtiene una referencia al documento del usuario que compartió el post.
  const userShareDocRef = doc(postSharesCollectionRef, sharerId);

  try {
    const existingSharedPostDoc = await getDoc(sharedPostDocRef);
    const postData = await firebaseGetUserSpecificPost(postId);

    if (existingSharedPostDoc.exists()) {
      // Si la publicación ya ha sido compartida, la eliminamos.
      await deleteDoc(userShareDocRef);
      await deleteDoc(sharedPostDocRef);
    } else {
      // Si la publicación no ha sido compartida, la compartimos.
      await setDoc(userShareDocRef, { sharerId: sharerId });
      await setDoc(sharedPostDocRef, postData);
    }
  } catch (error) {
    console.error("Error compartiendo el post:", error);
  }
}
