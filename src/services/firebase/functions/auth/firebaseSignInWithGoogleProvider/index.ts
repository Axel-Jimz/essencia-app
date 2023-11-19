// Importamos la función necesaria de Firebase
import { signInWithRedirect } from "firebase/auth";

// Importamos la variable de configuración de Firebase
import { auth, googleProvider } from "../../../config";

// Definimos una función asíncrona para autenticar a un usuario con Google en Firebase
export const firebaseSignInWithGoogleProvider = async () => {
  try {
    // Redirigimos al usuario a la página de inicio de sesión de Google
    await signInWithRedirect(auth, googleProvider);
  } catch (error) {
    console.error(error);
  }
};
