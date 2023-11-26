// Importa los módulos necesarios de Firebase Firestore.
import { collection, doc, onSnapshot } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

export const firebaseWatchPersonalNotifications = (userId: string, callback: (notificationsData: any[]) => void) => {
  // Obtiene una referencia al documento del usuario.
  const userRef = doc(db, "users", userId);

  // Obtiene una referencia a la subcolección "notifications" del usuario.
  const notificationsRef = collection(userRef, "notifications");

  // Observa los cambios en la subcolección "notifications".
  return onSnapshot(notificationsRef, async (snapshot) => {
    const notificationsData: any[] = [];

    // Itera sobre cada documento en la subcolección "notifications".
    snapshot.forEach((doc) => {
      const data = doc.data();

      if (Object.keys(data).length > 0) {
        // Agrega los datos a la matriz "notificationsData".
        notificationsData.push(data);
      }
    });

    // Llama a la función de devolución de llamada con los datos de las notificaciones personales.
    callback(notificationsData);
  });
};
