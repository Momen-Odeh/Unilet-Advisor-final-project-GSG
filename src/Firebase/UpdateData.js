import { doc, collection, query, where, getDocs, updateDoc } from 'firebase/firestore';
import FirebaseApp from './index'
async function UpdateData (collectionName,key,value,newDocument){
    // const colRef = collection(FirebaseApp.db,collectionName)
    // return await  getDocs(colRef);
    const documentsRef = collection(FirebaseApp.db, collectionName);
    const q = query(documentsRef, where(key, '==', value));
    try {
        const querySnapshot = await getDocs(q);
    
        if (querySnapshot.empty) {
          console.log('No matching documents found.');
          return;
        }
    
        querySnapshot.forEach((doc) => {
            updateDoc(doc.ref, newDocument); // <-- Update this line
            console.log('Document successfully updated!');
          });
      } catch (error) {
        console.error('Error updating documents:', error);
      }
}

export default UpdateData