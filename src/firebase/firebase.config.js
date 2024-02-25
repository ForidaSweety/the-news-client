// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJCeXdgeDZYJhwL2M5nClcVCzOc2zEQRw",
  authDomain: "the-news-dragon-client-e0c7e.firebaseapp.com",
  projectId: "the-news-dragon-client-e0c7e",
  storageBucket: "the-news-dragon-client-e0c7e.appspot.com",
  messagingSenderId: "592118415388",
  appId: "1:592118415388:web:13fad8df09527f58fb9fd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;