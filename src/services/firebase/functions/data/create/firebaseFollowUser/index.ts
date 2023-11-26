// Importa los módulos necesarios de Firebase Firestore.
import { collection, doc, setDoc, deleteDoc, getDoc } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función sigue o deja de seguir a un usuario específico en la base de datos de Firebase Firestore.
export const firebaseFollowUser = async (userId: string, userIdToFollow: string) => {
  // Obtiene una referencia al documento del usuario y a la subcolección "following" del usuario.
  const userDocRef = doc(db, "users", userId);
  const followingRef = collection(userDocRef, "following");
  
  // Obtiene una referencia al documento del usuario que se va a seguir y a la subcolección "followers" del usuario.
  const userToFollowDocRef = doc(db, "users", userIdToFollow);
  const followersRef = collection(userToFollowDocRef, "followers");

  try {
    const followingDoc = await getDoc(doc(followingRef, userIdToFollow));
    const followersDoc = await getDoc(doc(followersRef, userId));

    if (followingDoc.exists() && followersDoc.exists()) {
      // Si userIdToFollow ya existe en la subcolección "following" del usuario, se elimina.
      await deleteDoc(doc(followingRef, userIdToFollow));
      // Si userId ya existe en la subcolección "followers" del usuario userIdToFollow, se elimina.
      await deleteDoc(doc(followersRef, userId));
    } else {
      // Si userIdToFollow no existe en la subcolección "following" del usuario, se agrega.
      await setDoc(doc(followingRef, userIdToFollow), { followed: userIdToFollow });
      // Si userId no existe en la subcolección "followers" del usuario userIdToFollow, se agrega.
      await setDoc(doc(followersRef, userId), { follower: userId });
    }
  } catch (error) {
    console.error("Error al seguir al usuario:", error);
  }
}
