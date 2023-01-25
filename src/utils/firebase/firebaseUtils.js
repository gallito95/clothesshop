import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyBzIlxBhtZnkpLKoGWejS3H26ORyUzMQXI",
  
    authDomain: "clothing-shop-db-31ce8.firebaseapp.com",
  
    projectId: "clothing-shop-db-31ce8",
  
    storageBucket: "clothing-shop-db-31ce8.appspot.com",
  
    messagingSenderId: "1056210891429",
  
    appId: "1:1056210891429:web:d07a072cf4300458ff534c"
  
  };
  
  
  // Initialize Firebase
  
  const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);


  const userSnapshot = await getDoc(userDocRef);


  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};