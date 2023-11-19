import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../../../config";

import { firebaseUploadFile } from "../../upload/firebaseUploadFile";

import { generateId } from "../../../../../../utils/ids/generateId";
import { getFormattedCurrentDate } from "../../../../../../utils/date/getFormattedCurrentDate";
import { getTimestamp } from "../../../../../../utils/date/getTimestamp";

export const firebaseCreatePost = async (data: any, userId: string) => {
  const postsReference = collection(db, "posts");

  const postId = generateId();

  const postLikesReference = collection(doc(postsReference, postId), "likes");
  const postCommentsReference = collection(doc(postsReference, postId), "comments");
  const postSharesReference = collection(doc(postsReference, postId), "shares");
  const postReportsReference = collection(doc(postsReference, postId), "reports");

  if (data.postImage && data.postImage.length > 0) {
    const file = await firebaseUploadFile(data.postImage[0], "postImages/miprimeraimagen");
    data.postImage = file;
  }

  const postMetadata = {
    authorId: userId,
    postId: postId,
    createdAt: getFormattedCurrentDate(),
    timestamp: getTimestamp(),
  };

  const updatedData = { ...data, ...postMetadata };

  try {
    await setDoc(doc(postsReference, postId), updatedData);

    await setDoc(doc(postLikesReference, 'default'), {});
    await setDoc(doc(postCommentsReference, 'default'), {});
    await setDoc(doc(postSharesReference, 'default'), {});
    await setDoc(doc(postReportsReference, 'default'), {});
  } catch (error) {
    console.log(error);
  }
};
