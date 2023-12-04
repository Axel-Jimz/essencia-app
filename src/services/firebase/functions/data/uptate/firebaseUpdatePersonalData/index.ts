import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../config";
import { firebaseUploadFile } from "../../upload/firebaseUploadFile";
import { generateId } from "../../../../../../utils/ids/generateId";


export const firebaseUpdatePersonalData = async (userId: string, data: any) => {
    const userReference = doc(db, "users", userId);
    const updateData: any = {};
  
    if (data.biography !== '') {
      updateData.biography = data.biography;
    }
    if (data.username !== '') {
      updateData.username = data.username;
    }
    if (data.profilePictureURL.length > 0) {
      const file = await firebaseUploadFile(data.profilePictureURL[0], `profilePictureImages/${generateId()}`);
      updateData.profilePictureURL = file;
    } else {
      updateData.profilePictureURL = "";
    }
  
    // Eliminar propiedades vacías
    Object.keys(updateData).forEach(key => (updateData[key] === '' || updateData[key] === undefined) && delete updateData[key]);
  
    try {
      await updateDoc(userReference, updateData);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };
  