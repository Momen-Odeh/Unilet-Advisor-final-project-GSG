import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UplodeFile = async (selectedFile, email) => {
  if (selectedFile) {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, 'images/' + email + '/' + selectedFile.name);
      await uploadBytes(storageRef, selectedFile);
      const downloadURL = await getDownloadURL(storageRef);
    //   console.log('Download URL:', downloadURL);
      return downloadURL;
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }
};


  export default UplodeFile