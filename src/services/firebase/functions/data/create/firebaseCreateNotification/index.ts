// Importamos las funciones necesarias de Firebase
import { collection, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";

// Importamos la variable de configuración de Firebase
import { db } from "../../../../config";

import { getFormattedCurrentDate } from "../../../../../../utils/date/getFormattedCurrentDate";
import { getTimestamp } from "../../../../../../utils/date/getTimestamp";
import { generateId } from "../../../../../../utils/ids/generateId";

export const firebaseCreateNotification = async (postId: string, authorId: string, userId: string, type: string) => {
  const userDocReference = doc(collection(db, "users"), authorId);
  const notificationsReference = collection(userDocReference, "notifications");
  const querySnapshot = await getDocs(query(notificationsReference, where("postId", "==", postId), where("notificatorId", "==", userId)));

  if (!querySnapshot.empty) {
    // Si ya existe una notificación con el mismo postId y notificatorId
    let notificationIdToUpdate = null;
    querySnapshot.forEach((doc) => {
      const existingType = doc.data().type;
      if (existingType === type) {
        // Si el tipo existente es el mismo que el tipo proporcionado, actualiza los datos
        notificationIdToUpdate = doc.id;
      }
    });

    if (notificationIdToUpdate) {
      // Si se encontró una notificación para actualizar, actualiza el documento existente
      try {
        await updateDoc(doc(notificationsReference, notificationIdToUpdate), {
          postId: postId,
          notificatorId: userId,
          type: type,
          createdAt: getFormattedCurrentDate(),
          timestamp: getTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      // Si no se encontró una notificación para actualizar, agrega una nueva notificación con el tipo proporcionado
      const notificationId = generateId();
      const notificationData = {
        postId: postId,
        notificatorId: userId,
        notificationId: notificationId,
        type: type,
        createdAt: getFormattedCurrentDate(),
        timestamp: getTimestamp(),
      };

      try {
        await setDoc(doc(notificationsReference, notificationId), notificationData);
        await updateDoc(userDocReference, {
          viewedNotifications: true
        });
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    // Si no existe una notificación con el mismo postId y notificatorId, agrega una nueva notificación con el tipo proporcionado
    const notificationId = generateId();
    const notificationData = {
      postId: postId,
      notificatorId: userId,
      notificationId: notificationId,
      type: type,
      createdAt: getFormattedCurrentDate(),
      timestamp: getTimestamp(),
    };

    try {
      await setDoc(doc(notificationsReference, notificationId), notificationData);
      await updateDoc(userDocReference, {
        viewedNotifications: true
      });
    } catch (error) {
      console.log(error);
    }
  }
};
