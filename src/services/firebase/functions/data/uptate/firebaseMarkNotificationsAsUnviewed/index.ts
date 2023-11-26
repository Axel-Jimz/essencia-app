import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config";

// Esta función permite actualizar la propiedad viewedNotifications a false en el documento de la colección "users"
export const firebaseMarkNotificationsAsUnviewed = async (userId: string) => {
  try {
    // Obtener una referencia al documento de usuario y actualizar la propiedad viewedNotifications a false
    const userDoc = doc(db, "users", userId);
    await updateDoc(userDoc, {
      viewedNotifications: false,
    });
  } catch (error) {
    console.error("Error updating viewedNotifications:", error);
  }
};
