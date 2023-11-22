// Importa los módulos necesarios de Firebase Firestore.
import { collection, doc, onSnapshot } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función observa los cambios en la colección "shares" de un post específico y llama a la función de devolución de llamada con los datos de los shares.
export const firebaseWatchPostShares = (postId: string, callback: (sharesData: any[]) => void) => {
  // Obtiene una referencia al documento del post.
  const postRef = doc(db, "posts", postId);

  // Obtiene una referencia a la colección "shares" del post.
  const sharesRef = collection(postRef, "shares");

  // Observa los cambios en la colección "shares".
  return onSnapshot(sharesRef, (snapshot) => {
    const sharesData: any[] = [];

    // Itera sobre cada documento en la colección "shares".
    snapshot.forEach((doc) => {
      const data = doc.data();

      // Si el documento tiene datos, agrega los datos a la matriz "sharesData".
      if (Object.keys(data).length > 0) { 
        sharesData.push(data);
      }
    });

    // Llama a la función de devolución de llamada con los datos de los shares.
    callback(sharesData);
  });
}
