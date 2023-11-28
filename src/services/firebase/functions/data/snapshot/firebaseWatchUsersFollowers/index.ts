// Importa los módulos necesarios de Firebase Firestore.
import { collection, doc, onSnapshot } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función observa los cambios en la subcolección "followers" de un usuario específico y llama a la función de devolución de llamada con los datos de los usuarios que lo siguen.
export const firebaseWatchUsersFollowers = ( userId: string, callback: (followersData: any[]) => void) => {
  // Obtiene una referencia al documento del usuario y a la subcolección "followers" del usuario.
  const userRef = doc(db, "users", userId);
  const followersRef = collection(userRef, "followers");

  // Observa los cambios en la subcolección "followers".
  return onSnapshot(followersRef, (snapshot) => {
    const followersData: any[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();

      if (Object.keys(data).length > 0) {
        followersData.push(data);
      }
    });

    // Llama a la función de devolución de llamada con los datos de los usuarios que siguen a este usuario.
    callback(followersData);
  });
};
