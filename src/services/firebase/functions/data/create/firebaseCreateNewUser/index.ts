import { collection, setDoc, doc  } from "firebase/firestore"
import { db } from "../../../../config"

export const firebaseRegisterUser = async (user: any) => {
    const usersReference = collection(db, 'users');
    // const followersReference = collection(doc(usersReference, user.uid), 'followers');

    const userData = {
        userId: user.uid,
        username: user.displayName,
        profilePicture: user.photoURL,
        description: '',
        createdAt: user.metadata.creationTime,
    }

    try {
        console.log('creando usuario')
        await setDoc(doc(usersReference, user.uid), userData);
        console.log('creando coleccion')
        // await setDoc(doc(followersReference, 'default'), {});
    } catch (error) {
        console.log(error)
    }
}