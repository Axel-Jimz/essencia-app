// Importa la función firebaseGetUsersData para obtener los datos de los usuarios que publicaron los comentarios.
import { firebaseGetUsersData } from "../firebaseGetUsersData";

// Esta función obtiene los datos de los usuarios que publicaron los comentarios.
export const firebaseGetUserCommentsAndData = async (commentsData: any) => {
    // Obtiene los IDs de usuario de los comentarios.
    const authorIds = commentsData.map((comment: any) => comment.authorId);
    let data;

    try {
      // Obtiene los datos de los usuarios que publicaron los comentarios.
      data = await firebaseGetUsersData(authorIds)
    } catch (error) {
      console.log(error)
    }
    
    return data;
  }
