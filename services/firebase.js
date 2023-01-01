// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgMeVsBMX5JpsGzbZTinoz91eHUxELGSU",
  authDomain: "fir-project-bootcamp.firebaseapp.com",
  projectId: "fir-project-bootcamp",
  storageBucket: "fir-project-bootcamp.appspot.com",
  messagingSenderId: "1089076961524",
  appId: "1:1089076961524:web:e83433f04492abea8c7ea1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

