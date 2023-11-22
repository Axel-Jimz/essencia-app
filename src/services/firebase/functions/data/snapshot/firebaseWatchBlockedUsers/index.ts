// Importa los módulos necesarios de Firebase Firestore.
import { collection, doc, onSnapshot } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función observa los cambios en la colección "blockedUsers" de un usuario específico y llama a la función de devolución de llamada con los datos de los usuarios bloqueados.
export const firebaseWatchBlockedUsers = (userId: string, callback: (blockedUsersData: any[]) => void) => {
  // Obtiene una referencia al documento del usuario.
  const userRef = doc(db, "users", userId);

  // Obtiene una referencia a la colección "blockedUsers" del usuario.
  const blockedUsersRef = collection(userRef, "blockedUsers");

  // Observa los cambios en la colección "blockedUsers".
  return onSnapshot(blockedUsersRef, (snapshot) => {
    const blockedUsersData: any[] = [];

    // Itera sobre cada documento en la colección "blockedUsers".
    snapshot.forEach((doc) => {
      const data = doc.data();

      // Si el documento tiene datos, agrega los datos a la matriz "blockedUsersData".
      if (Object.keys(data).length > 0) { 
        blockedUsersData.push(data);
      }
    });

    // Llama a la función de devolución de llamada con los datos de los usuarios bloqueados.
    callback(blockedUsersData);
  });
}
