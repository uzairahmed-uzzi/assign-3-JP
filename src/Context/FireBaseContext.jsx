import { createContext, useContext } from "react";
import { app } from "../Firebase/Firebase";
import { getDatabase, set, ref } from "firebase/database";
import {getFirestore,collection,addDoc,getDocs,query,where} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseAuth = getAuth(app);
const fireStoreInstance=getFirestore(app)

const db = getDatabase(app);

//custom hook
export const useFireBase = () => useContext(FirebaseContext);

const googleProvider=new GoogleAuthProvider();
// COMPONENT
export const FireBaseProvider = (props) => {
    const dbCollection=collection(fireStoreInstance,'kuch');

    const getAllDocs=async()=>{
        // const data=query(dbCollection,where('name',"==","Uzair"))
        const q=query(dbCollection)
        const snapShot= await getDocs(dbCollection);
        snapShot.forEach(data=>console.log(data.data()))
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };
    const signInUserWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    };
    const signinWithGoogle=()=>{
        signInWithPopup(firebaseAuth, googleProvider)
    }
    const putData = async (key, data) => {
    return set(ref(db, key), data);
  };
  const addData=async(data)=>{
    const res=await addDoc(dbCollection,data)
    console.log(res);
  }
  const addSubData=async(data)=>{
    const res=await addDoc(dbCollection,data)
    console.log(res);
  }
  return (
    <FirebaseContext.Provider
      value={{ createUser, putData, signInUserWithEmailPassword,signinWithGoogle,addData,addSubData,getAllDocs }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
