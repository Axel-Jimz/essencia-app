// Importa los módulos necesarios de Firebase Firestore.
import { collection, doc, onSnapshot } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Importa la función firebaseGetUserCommentsAndData para obtener los datos de los usuarios que publicaron los comentarios.
import { firebaseGetUserCommentsAndData } from "../../read/firebaseGetUserCommentsAndData";

// Importa la función mergeArraysByProperties desde el archivo utils.
import { mergeArraysByProperties } from "../../../../../../utils/array/mergeArraysByProperties";

// Esta función observa los cambios en la colección "comments" de un post específico y llama a la función de devolución de llamada con los datos de los comentarios.
export const firebaseWatchPostComments = (postId: string, callback: (commentsData: any[]) => void) => {
  // Obtiene una referencia al documento del post.
  const postRef = doc(db, "posts", postId);

  // Obtiene una referencia a la colección "comments" del post.
  const commentsRef = collection(postRef, "comments");

  // Observa los cambios en la colección "comments".
  return onSnapshot(commentsRef, async (snapshot) => {
    let commentsData: any[] = [];
    let usersData;

    snapshot.forEach((doc) => {
      const data = doc.data();

      if (Object.keys(data).length > 0) {
        commentsData.push(data);
      }
    });

    try {
      // Obtiene los datos de los usuarios que publicaron los comentarios.
      usersData = await firebaseGetUserCommentsAndData(commentsData)
    } catch (error) {
      console.log(error)
    }

    // Combina los datos de los comentarios y los usuarios utilizando las propiedades "authorId" y "userId".
    const combinedCommentsAndUserData  = mergeArraysByProperties(commentsData, usersData, 'authorId', 'userId')

    // Llama a la función de devolución de llamada con los datos de los comentarios y los usuarios.
    callback(combinedCommentsAndUserData );
  });
};
