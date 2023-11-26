// Importa los módulos necesarios de Firebase Firestore.
import { doc, deleteDoc } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función elimina una notificación personal específica de un usuario en la base de datos de Firebase Firestore.
export const firebaseDeletePersonalNotification = async ( userId: string, notificationId: string) => {
  // Obtiene una referencia al documento del usuario y a la subcolección "notifications" del usuario.
  const userDocRef = doc(db, "users", userId);
  const notificationDocRef = doc(userDocRef, "notifications", notificationId);

  try {
    // Elimina el documento de la notificación.
    await deleteDoc(notificationDocRef);
  } catch (error) {
    console.error("Error al eliminar la notificación:", error);
  }
};
