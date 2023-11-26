// Importa los módulos necesarios de Firebase Firestore.
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función elimina todas las notificaciones personales de un usuario específico en la base de datos de Firebase Firestore.
export const firebaseDeleteAllPersonalNotifications = async (userId: string) => {
  // Obtiene una referencia al documento del usuario y a la subcolección "notifications" del usuario.
  const userNotificationsRef = collection(doc(db, "users", userId), "notifications");

  try {
    // Obtiene los datos de las notificaciones.
    const querySnapshot = await getDocs(userNotificationsRef);
    querySnapshot.forEach((doc) => {
      if (doc.id !== "default") {
        // Elimina los documentos correspondientes de las subcolecciones "notifications".
        deleteDoc(doc.ref);
      }
    });
  } catch (error) {
    console.error("Error al eliminar las notificaciones:", error);
  }
};
