import { collection, setDoc, doc  } from "firebase/firestore"
import { db } from "../../../../config"

export const firebaseRegisterUser = async (user: any) => {
    const usersReference = collection(db, 'users');

    const followersReference = collection(doc(usersReference, user.uid), 'followers');
    const followingReference = collection(doc(usersReference, user.uid), 'following');
    const sharesReference = collection(doc(usersReference, user.uid), 'shares');
    const bookmarksReference = collection(doc(usersReference, user.uid), 'bookmarks');
    const blockedUsersReference = collection(doc(usersReference, user.uid), 'blockedUsers');
    const notificationsReference = collection(doc(usersReference, user.uid), 'notifications');

    const userData = {
        userId: user.uid,
        username: user.displayName,
        profilePictureURL: user.photoURL,
        biography: '',
        accountCreated: user.metadata.creationTime,
        viewedNotifications: false,
    }

    try {
        await setDoc(doc(usersReference, user.uid), userData);
        await setDoc(doc(followersReference, 'default'), {});
        await setDoc(doc(followingReference, 'default'), {});
        await setDoc(doc(sharesReference, 'default'), {});
        await setDoc(doc(bookmarksReference, 'default'), {});
        await setDoc(doc(blockedUsersReference, 'default'), {});
        await setDoc(doc(notificationsReference, 'default'), {});
    } catch (error) {
        console.log(error)
    }
}