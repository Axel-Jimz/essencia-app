// Importamos las funciones necesarias de Firebase
import { collection, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

// Importamos la variable de configuración de Firebase
import { db } from "../../../../config";

// Esta función permite a un usuario reportar un post.
export const firebaseReportPost = async (postId: string, reporterId: string) => {
   // Obtiene la referencia al documento del post.
  const postReference = doc(db, "posts", postId);

  // Obtiene la referencia a la subcolección de reports.
  const reportsSubcollectionReference = collection(postReference, "reports");

  // Obtiene la referencia al documento del reporter.
  const reportDocReference = doc(reportsSubcollectionReference, reporterId);

  try {
    const reportDoc = await getDoc(reportDocReference);

    if (reportDoc.exists()) {
      // Si el reporte ya existe, lo elimina.
      await deleteDoc(reportDocReference);
    } else {
      // Si el reporte no existe, lo agrega.
      await setDoc(reportDocReference, { reporterId: reporterId });
    }
  } catch (error) {
    console.error("Error al agregar o eliminar el reporte:", error);
  }
};