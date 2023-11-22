// Importa los módulos necesarios de Firebase Firestore.
import { collection, doc, onSnapshot } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función observa los cambios en la colección "savedPosts" de un usuario específico y llama a la función de devolución de llamada con los datos de los posts guardados.
export const firebaseWatchSavedPosts = (userId: string, callback: (savedPostsData: any[]) => void) => {
  // Obtiene una referencia al documento del usuario.
  const userRef = doc(db, "users", userId);

  // Obtiene una referencia a la colección "savedPosts" del usuario.
  const savedPostsRef = collection(userRef, "savedPosts");

  // Observa los cambios en la colección "savedPosts".
  return onSnapshot(savedPostsRef, (snapshot) => {
    const savedPostsData: any[] = [];

    // Itera sobre cada documento en la colección "savedPosts".
    snapshot.forEach((doc) => {
      const data = doc.data();

      // Agrega los datos a la matriz "savedPostsData".
      savedPostsData.push(data);
    });

    // Llama a la función de devolución de llamada con los datos de los posts guardados.
    callback(savedPostsData);
  });
}
