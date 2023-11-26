// Importamos las funciones necesarias de Firebase
import { collection, doc, setDoc } from "firebase/firestore";

// Importamos la variable de configuración de Firebase
import { db } from "../../../../config";

import { getFormattedCurrentDate } from "../../../../../../utils/date/getFormattedCurrentDate";
import { getTimestamp } from "../../../../../../utils/date/getTimestamp";
import { generateId } from "../../../../../../utils/ids/generateId";
import { firebaseCreateCommentNotification } from "../firebaseCreateCommentNotification";

// Esta función permite a un usuario comentar un post.
export const firebaseCommentPost = async (postId: string, authorId: string, userId: string, data: any) => {
  // Creamos una referencia al documento específico dentro de la colección "posts"
  const postDocReference = doc(collection(db, 'posts'), postId);

  // Genera un ID único para el nuevo comentario.
  const commentId = generateId();

  // Creamos una referencia a la subcolección "comments" dentro del documento específico
  const commentsReference = collection(postDocReference, 'comments');

   // Crea un objeto con los metadatos del comentario.
  const commentMetadata = {
    authorId: userId,
    postId: postId,
    commentId: commentId,
    commentContent: data.commentContent,
    createdAt: getFormattedCurrentDate(),
    timestamp: getTimestamp(),
  };

  try {
    // Utilizar setDoc con el identificador único generado para agregar el nuevo documento
    await setDoc(doc(commentsReference, commentId), commentMetadata);
    await firebaseCreateCommentNotification(postId, authorId, userId)
  } catch (error) {
    console.log(error);
  }
};
