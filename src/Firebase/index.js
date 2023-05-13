import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBXoCkpZ2cqJ1rZUz6nEMQgozTKqb8YPKc",
  authDomain: "unilet-advisor.firebaseapp.com",
  projectId: "unilet-advisor",
  storageBucket: "unilet-advisor.appspot.com",
  messagingSenderId: "324516789760",
  appId: "1:324516789760:web:45aee2e7572860ccb2e2e5",
  measurementId: "G-KE2KC46S16"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore()

export default {FirebaseApp,db}