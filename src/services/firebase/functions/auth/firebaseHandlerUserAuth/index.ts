// Importamos las funciones necesarias de Firebase
import { getDoc, doc } from "firebase/firestore";

// Importamos la variable de configuración de Firebase
import { db } from "../../../config";

// Importamos la función "firebaseRegisterUser" del archivo "firebaseCreateNewUser.js"
import { firebaseRegisterUser } from "../../data/create/firebaseCreateNewUser";

// Definimos una función asíncrona para manejar la autenticación de usuarios en Firebase
export const firebaseHandlerUserAuth = async (user: any) => {
  // Creamos una referencia al documento del usuario en la colección "users"
  const userRefeference = doc(db, "users", user.uid);

  // Obtenemos una instantánea del documento del usuario
  const docSnap = await getDoc(userRefeference);

  // Si el documento no existe, registramos al usuario en Firebase
  if (!docSnap.exists()) {
    await firebaseRegisterUser(user);
    return;
  }

  // Si el documento existe, no hacemos nada
  return;
};
