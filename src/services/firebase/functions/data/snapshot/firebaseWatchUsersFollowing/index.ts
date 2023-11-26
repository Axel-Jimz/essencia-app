// Importa los módulos necesarios de Firebase Firestore.
import { collection, doc, onSnapshot } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función observa los cambios en la subcolección "following" de un usuario específico y llama a la función de devolución de llamada con los datos de los usuarios que sigue.
export const firebaseWatchUsersFollowing = (userId: string, callback: (followingData: any[]) => void) => {
  // Obtiene una referencia al documento del usuario y a la subcolección "following" del usuario.
  const userRef = doc(db, "users", userId);
  const followingRef = collection(userRef, "following");

  // Observa los cambios en la subcolección "following".
  return onSnapshot(followingRef, (snapshot) => {
    const followingData: any[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();

      if (Object.keys(data).length > 0) { 
        followingData.push(data);
      }
      
    });

    // Llama a la función de devolución de llamada con los datos de los usuarios que sigue.
    callback(followingData);
  });
};
