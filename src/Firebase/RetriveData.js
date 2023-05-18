import {collection,getDocs} from 'firebase/firestore'
import FirebaseApp from './index'
const RetriveData = async (collectionName)=>{
    const colRef = collection(FirebaseApp.db,collectionName)
    return await  getDocs(colRef);
}

export default RetriveData