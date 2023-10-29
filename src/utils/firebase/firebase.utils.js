// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

import  {
getFirestore,
doc,
getDoc,
setDoc

} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz0_UsWeMzw_pCPN3MmHS8aIIII7gBAa8",
  authDomain: "crown-clothing-b35a4.firebaseapp.com",
  projectId: "crown-clothing-b35a4",
  storageBucket: "crown-clothing-b35a4.appspot.com",
  messagingSenderId: "400887684906",
  appId: "1:400887684906:web:0ed7bdb126f5c115cc8853",
  measurementId: "G-VQTKR28Y57"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider =  new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})
 
const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const   createUserDocumentFromAuth = async (userAuth) => {
    
            const userDocRef = doc(db, 'users', userAuth.uid );

            console.log(userDocRef);

            const userSnapshot = await getDoc(userDocRef);

            if(!userSnapshot.exists())
            {
                const {displayName, email } = userAuth;

                const createdAt = new Date();
            
            try {
                await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAt
                });
            } catch (error) {
                console.log('error creating the user', error.message);
            }}

            return userDocRef;
}

 


