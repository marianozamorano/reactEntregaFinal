import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDc9UG6v0cDfIVwSQjCmgBmhybtzR-eXxM",
    authDomain: "marolio-react-8510b.firebaseapp.com",
    projectId: "marolio-react-8510b",
    storageBucket: "marolio-react-8510b.appspot.com",
    messagingSenderId: "177517771926",
    appId: "1:177517771926:web:f95c0d926e9923016d96b7"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);