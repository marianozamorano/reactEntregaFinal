import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
//Importamos 2 funciones del modulo Firebase:

//initializeApp = la voy a usar para INICIAR LA CONEXION CON FIREBASE
//getFirestore = se utiliza para obtener una instancia de Firestore

//Este es un objeto con toda la info de nuestra cuenta. Se incluye la key personal de acceso a la DB
const firebaseConfig = {
    apiKey: "AIzaSyDc9UG6v0cDfIVwSQjCmgBmhybtzR-eXxM",
    authDomain: "marolio-react-8510b.firebaseapp.com",
    projectId: "marolio-react-8510b",
    storageBucket: "marolio-react-8510b.appspot.com",
    messagingSenderId: "177517771926",
    appId: "1:177517771926:web:f95c0d926e9923016d96b7"
};

// Inicializamos Firebase y se pasa la config como argumento
//Esto devuelve una instancia de Firebase
const app = initializeApp(firebaseConfig);

//Ahora uso esa instancia para obtener el servicio de Firestore

export const db = getFirestore(app);