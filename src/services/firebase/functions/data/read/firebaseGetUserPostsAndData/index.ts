// Importa los módulos necesarios de Firebase Firestore.
import { DocumentData } from "firebase/firestore";

// Importa la función firebaseGetUserPosts para obtener todos los posts de la base de datos de Firebase Firestore.
import { firebaseGetUserPosts } from "../firebaseGetUserPosts"

// Importa la función firebaseGetUsersData para obtener los datos de los usuarios que publicaron los posts.
import { firebaseGetUsersData } from "../firebaseGetUsersData"

// Importa las funciones extractUniqueProperties y mergeArraysByProperties desde el archivo utils.
import { extractUniqueProperties } from "../../../../../../utils/array/extractUniqueProperties";
import { mergeArraysByProperties } from "../../../../../../utils/array/mergeArraysByProperties";

// Esta función obtiene todos los posts de la base de datos de Firebase Firestore y los datos de los usuarios que los publicaron.
export const firebaseGetUserPostsAndData = async () => {
    let posts: Array<DocumentData> = [];
    let users: Array<DocumentData> = [];

    try {
        // Obtiene todos los posts de la base de datos de Firebase Firestore.
        posts = await firebaseGetUserPosts();

        // Obtiene los datos de los usuarios que publicaron los posts.
        users = await firebaseGetUsersData(extractUniqueProperties(posts, "authorId"));
    } catch (error) {
        console.log(error)
    }

    // Combina los datos de los posts y los usuarios utilizando las propiedades "authorId" y "userId".
    const data = mergeArraysByProperties(posts, users, 'authorId', 'userId');

    return data;
}
