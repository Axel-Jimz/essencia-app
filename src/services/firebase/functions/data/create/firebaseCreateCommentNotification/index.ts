/// Importamos las funciones necesarias de Firebase.
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";

// Importamos la variable de configuración de Firebase.
import { db } from "../../../../config";

// Importamos las funciones generateId, getFormattedCurrentDate y getTimestamp desde el archivo utils.
import { generateId } from "../../../../../../utils/ids/generateId";
import { getFormattedCurrentDate } from "../../../../../../utils/date/getFormattedCurrentDate";
import { getTimestamp } from "../../../../../../utils/date/getTimestamp";

// Esta función crea una notificación de comentario para un usuario específico en la base de datos de Firebase Firestore.
export const firebaseCreateCommentNotification = async (postId: string, authorId: string, userId: string) => {
    // Obtiene una referencia al documento del usuario.
    const userDocReference = doc(collection(db, "users"), authorId);

    // Obtiene una referencia a la colección "notifications" del usuario.
    const notificationsReference = collection(userDocReference, "notifications");

    // Genera un ID de notificación único.
    const notificationId = generateId();

    // Crea un objeto de datos de notificación con el ID de publicación, el ID del notificador, el ID de notificación, el tipo de notificación, la fecha de creación y la marca de tiempo.
    const notificationData = {
      postId: postId,
      notificatorId: userId,
      notificationId: notificationId,
      type: "comment",
      createdAt: getFormattedCurrentDate(),
      timestamp: getTimestamp(),
    };
  
    try {
      // Crea un documento de notificación en la colección "notifications".
      await setDoc(doc(notificationsReference, notificationId), notificationData);

      // Actualiza el documento del usuario para indicar que se han visto las notificaciones.
      await updateDoc(userDocReference, {
        viewedNotifications: true
      });
    } catch (error) {
      console.log(error);
    }
  };
