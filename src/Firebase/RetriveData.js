import {collection,getDocs,orderBy,query,limit} from 'firebase/firestore'
import FirebaseApp from './index'
const RetriveData = async (collectionName,order='publishDate',limitItem=1000)=>{
    const colRef = collection(FirebaseApp.db,collectionName)
    const q = query(colRef, orderBy(order, 'desc'), limit(limitItem));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((item) => item.data());
    return data;
}

export default RetriveData