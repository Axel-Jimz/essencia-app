// Importa los módulos necesarios de Firebase Firestore.
import { DocumentData, collection, doc, getDocs } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Importa la función firebaseGetPostsData para obtener los datos de las publicaciones correspondientes.
import { firebaseGetPostsData } from "../firebaseGetPostsData";

// Esta función obtiene las notificaciones personales de un usuario específico en la base de datos de Firebase Firestore.
export const firebaseGetPersonalNotifications = async (userId: string) => {
  // Obtiene una referencia al documento del usuario y a la subcolección "notifications" del usuario.
  const userDocRef = doc(db, "users", userId);
  const userNotificationsReference = collection(userDocRef, "notifications");

  let postIds: Array<string> = [];
  let notificationsData: Array<DocumentData> = [];
  let postsData: Array<DocumentData> = [];

  try {
    // Obtiene los datos de las notificaciones.
    const querySnapshot = await getDocs(userNotificationsReference);

    querySnapshot.forEach((doc) => {
      const notificationData = doc.data();
      if (Object.keys(notificationData).length > 0) {
        notificationsData.push(notificationData);
        const postId = notificationData.postId;
        if (postId) {
          postIds.push(postId);
        }
      }
    });

    // Obtiene los datos de las publicaciones correspondientes utilizando los IDs de publicación.
    postsData = await firebaseGetPostsData(postIds);

    // Combinar datos de notificaciones con datos de publicaciones
    notificationsData.forEach((notification) => {
      const postId = notification.postId;
      const correspondingPostData = postsData.find((post) => post.postId === postId);
      if (correspondingPostData) {
        // Combinar datos de notificación con datos de publicación
        notification.postData = correspondingPostData;
      }
    });

    // Devuelve los datos de las notificaciones.
    return notificationsData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
