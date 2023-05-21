import FirebaseApp from './index'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'

const LogInFirebase = async (email,password)=>{
    const auth = getAuth(FirebaseApp.FirebaseApp)
    const credintials = await signInWithEmailAndPassword(auth,email,password)
    return credintials
}

export default LogInFirebase