// Importa los módulos necesarios de Firebase Firestore.
import { collection, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función bloquea o desbloquea a un usuario específico.
export const firebaseBlockUser = async (userId: string, userToBlockId: string) => {
  // Obtiene una referencia al documento del usuario.
  const userDocRef = doc(db, "users", userId);

  // Obtiene una referencia a la colección "blockedUsers" del usuario.
  const blockedUsersCollectionRef = collection(userDocRef, "blockedUsers");

  // Obtiene una referencia al documento del usuario que se va a bloquear o desbloquear.
  const userToBlockDocRef = doc(blockedUsersCollectionRef, userToBlockId);

  try {
    const userToBlockDoc = await getDoc(userToBlockDocRef);

    if (userToBlockDoc.exists()) {
      // Si el usuario ya está bloqueado, se desbloquea.
      await deleteDoc(userToBlockDocRef);
    } else {
      // Si el usuario no está bloqueado, se bloquea.
      await setDoc(userToBlockDocRef, { blocked: userToBlockId });
    }
  } catch (error) {
    console.error("Error al bloquear o desbloquear al usuario:", error);
  }
}
