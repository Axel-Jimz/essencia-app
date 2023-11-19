// Importamos las funciones necesarias de Firebase
import { collection, setDoc, doc } from "firebase/firestore"

// Importamos la variable de configuración de Firebase
import { db } from "../../../../config"

// Definimos una función asíncrona para registrar un usuario en Firebase
export const firebaseRegisterUser = async (user: any) => {
    // Creamos una referencia a la colección "users"
    const usersReference = collection(db, 'users');

    // Creamos referencias a las subcolecciones "followers", "following", "savedPosts", "sharedPosts", "blockedUsers" y "notifications"
    const followersReference = collection(doc(usersReference, user.uid), 'followers');
    const followingReference = collection(doc(usersReference, user.uid), 'following');
    const savedPostsReference = collection(doc(usersReference, user.uid), 'savedPosts');
    const sharedPostsReference = collection(doc(usersReference, user.uid), 'sharedPosts');
    const blockedUsersReference = collection(doc(usersReference, user.uid), 'blockedUsers');
    const notificationsReference = collection(doc(usersReference, user.uid), 'notifications');

    // Definimos un objeto con la información del usuario
    const userData = {
        userId: user.uid,
        username: user.displayName.trim().toLowerCase().replace(/ /g, ""),
        profilePictureURL: user.photoURL,
        biography: '',
        accountCreated: user.metadata.creationTime,
        viewedNotifications: false,
    }

    try {
        // Agregamos el objeto "userData" a la colección "users"
        await setDoc(doc(usersReference, user.uid), userData);

        // Agregamos documentos vacíos a las subcolecciones "followers", "following", "savedPosts", "sharedPosts", "blockedUsers" y "notifications"
        await setDoc(doc(followersReference, 'default'), {});
        await setDoc(doc(followingReference, 'default'), {});
        await setDoc(doc(savedPostsReference, 'default'), {});
        await setDoc(doc(sharedPostsReference, 'default'), {});
        await setDoc(doc(blockedUsersReference, 'default'), {});
        await setDoc(doc(notificationsReference, 'default'), {});
    } catch (error) {
        console.log(error)
    }
}
