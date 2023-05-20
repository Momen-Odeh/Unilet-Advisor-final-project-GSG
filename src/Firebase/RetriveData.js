import {collection,getDocs,orderBy} from 'firebase/firestore'
import FirebaseApp from './index'
const RetriveData = async (collectionName)=>{
    const colRef = await collection(FirebaseApp.db,collectionName)
    const data = (await  getDocs(colRef)).docs.map((item) => item.data());
    return await data;
}

export default RetriveData