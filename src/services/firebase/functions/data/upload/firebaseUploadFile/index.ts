import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../config";

export const firebaseUploadFile = async (file: File, path: string) => {
  const fileRef = ref(storage, path);

  try {
    await uploadBytes(fileRef, file);
    const fileURL = await getDownloadURL(fileRef);
    return fileURL;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};


