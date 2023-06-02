// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDd1FrwOaqeatUZkEctTOhwHWjhRS5Zmv0',
    authDomain: 'realtor-clone-react-6244c.firebaseapp.com',
    projectId: 'realtor-clone-react-6244c',
    storageBucket: 'realtor-clone-react-6244c.appspot.com',
    messagingSenderId: '848148308021',
    appId: '1:848148308021:web:b908100f1112e1acd1517c',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
