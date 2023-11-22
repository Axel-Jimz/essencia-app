// Importa los módulos necesarios de Firebase Firestore.
import { collection, doc, onSnapshot } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Esta función observa los cambios en la colección "reports" de un post específico y llama a la función de devolución de llamada con los datos de los reportes.
export const firebaseWatchPostReports = (postId: string, callback: (reportsData: any[]) => void) => {
  // Obtiene una referencia al documento del post.
  const postRef = doc(db, "posts", postId);

  // Obtiene una referencia a la colección "reports" del post.
  const reportsRef = collection(postRef, "reports");

  // Observa los cambios en la colección "reports".
  return onSnapshot(reportsRef, (snapshot) => {
    const reportsData: any[] = [];

    // Itera sobre cada documento en la colección "reports".
    snapshot.forEach((doc) => {
      const data = doc.data();

      // Si el documento tiene datos, agrega los datos a la matriz "reportsData".
      if (Object.keys(data).length > 0) {
        reportsData.push(data);
      }
    });

    // Llama a la función de devolución de llamada con los datos de los reportes.
    callback(reportsData);
  });
}