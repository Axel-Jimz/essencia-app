// Importa los módulos necesarios de Firebase Firestore.
import { getDoc, doc } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función obtiene los datos personales de un usuario específico.
export const firebaseGetPersonalData = async (userId: string) => {
  // Obtiene una referencia al documento del usuario.
  const userRefeference = doc(db, "users", userId);

  let data;

  try {
    // Obtiene los datos del usuario.
    data = (await getDoc(userRefeference)).data();
  } catch (error) {
    console.log(error);
  }

  return data;
}
