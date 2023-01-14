// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkPifiEVQqrAIabvGDtfcokgtbFM86tuM",
  authDomain: "okore-lens.firebaseapp.com",
  projectId: "okore-lens",
  storageBucket: "okore-lens.appspot.com",
  messagingSenderId: "192244788175",
  appId: "1:192244788175:web:66f79644f6cb60870780ba",
  measurementId: "G-61QNJNG4XB",
};

// Initialize Firebase

export const app = firebase.initializeApp(firebaseConfig);

export const firebaseStorage = app.storage();
