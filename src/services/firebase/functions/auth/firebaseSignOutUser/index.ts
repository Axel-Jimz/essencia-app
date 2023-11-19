// Importamos la función necesaria de Firebase
import { signOut } from "firebase/auth";

// Importamos la variable de configuración de Firebase
import { auth } from "../../../config";

// Definimos una función asíncrona para cerrar la sesión de un usuario en Firebase
export const firebaseSignOutUser = async () => {
  try {
    // Cerramos la sesión del usuario
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};
