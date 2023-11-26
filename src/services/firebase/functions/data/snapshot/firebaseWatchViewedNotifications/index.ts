// Importa los módulos necesarios de Firebase Firestore.
import { doc, onSnapshot } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

export const firebaseWatchViewedNotifications = ( userId: string, callback: (viewedNotificationsData: any) => void) => {
  // Obtiene una referencia al documento del usuario.
  const userRef = doc(db, "users", userId);

  // Observa los cambios en la propiedad "viewedNotifications" del documento del usuario.
  return onSnapshot(userRef, (doc) => {
    if (doc.exists()) {
      const viewedNotificationsData = doc.data().viewedNotifications;

      // Llama a la función de devolución de llamada con los datos de las notificaciones vistas.
      callback(viewedNotificationsData);
    } else {
      // Manejar el caso en el que el documento del usuario no existe
      console.log("El documento del usuario no existe");
    }
  });
};
