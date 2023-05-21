import {collection,addDoc,serverTimestamp,onSnapshot,doc,deleteDoc} from 'firebase/firestore'
import FirebaseApp from './index'
const StoreNewData = async (collectionName,docData)=>{
    const colRef = collection(FirebaseApp.db,collectionName)
    return await addDoc(colRef,docData)

    // onSnapshot(colRef,(snapShot)=>{ //track change on data base
    //     console.log(snapShot);
    //     snapShot.docs.forEach(doc=>{
    //         console.log("doc",doc.data(),doc.id);
    //     })
    // })
}

export default StoreNewData