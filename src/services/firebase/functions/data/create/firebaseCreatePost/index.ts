// Importa los módulos necesarios de Firebase Firestore.
import { collection, setDoc, doc } from "firebase/firestore";

// Importa la configuración de Firebase Firestore.
import { db } from "../../../../config";

// Importa la función firebaseUploadFile para subir archivos a Firebase Storage.
import { firebaseUploadFile } from "../../upload/firebaseUploadFile";

// Importa las funciones generateId, getFormattedCurrentDate y getTimestamp desde el archivo utils.
import { generateId } from "../../../../../../utils/ids/generateId";
import { getFormattedCurrentDate } from "../../../../../../utils/date/getFormattedCurrentDate";
import { getTimestamp } from "../../../../../../utils/date/getTimestamp";

// Esta función crea un nuevo post en la base de datos de Firebase Firestore.
export const firebaseCreatePost = async (data: any, userId: string) => {
  // Obtiene una referencia a la colección "posts".
  const postsReference = collection(db, "posts");

  // Genera un ID único para el nuevo post.
  const postId = generateId();

  // Obtiene una referencia a la colección "likes" del nuevo post.
  const postLikesReference = collection(doc(postsReference, postId), "likes");

  // Obtiene una referencia a la colección "comments" del nuevo post.
  const postCommentsReference = collection(doc(postsReference, postId), "comments");

  // Obtiene una referencia a la colección "shares" del nuevo post.
  const postSharesReference = collection(doc(postsReference, postId), "shares");

  // Obtiene una referencia a la colección "reports" del nuevo post.
  const postReportsReference = collection(doc(postsReference, postId), "reports");

  // Si el post incluye una imagen, la sube a Firebase Storage y actualiza el campo "postImage" con la URL de la imagen.
  if (data.postImage && data.postImage.length > 0) {
    const file = await firebaseUploadFile(data.postImage[0], `postImages/${generateId()}`);
    data.postImage = file;
  }

  // Crea un objeto con los metadatos del post.
  const postMetadata = {
    authorId: userId,
    postId: postId,
    createdAt: getFormattedCurrentDate(),
    timestamp: getTimestamp(),
  };

  // Combina los datos del post con los metadatos.
  const updatedData = { ...data, ...postMetadata };

  try {
    // Crea el nuevo post en la base de datos de Firebase Firestore.
    await setDoc(doc(postsReference, postId), updatedData);

    // Crea un documento vacío en la colección "likes" del nuevo post.
    await setDoc(doc(postLikesReference, 'default'), {});

    // Crea un documento vacío en la colección "comments" del nuevo post.
    await setDoc(doc(postCommentsReference, 'default'), {});

    // Crea un documento vacío en la colección "shares" del nuevo post.
    await setDoc(doc(postSharesReference, 'default'), {});

    // Crea un documento vacío en la colección "reports" del nuevo post.
    await setDoc(doc(postReportsReference, 'default'), {});
  } catch (error) {
    console.log(error);
  }
}

