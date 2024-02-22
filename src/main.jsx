import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASiz3jmVDs-gUXz3C1Awh0BJPFkui7PRw",
  authDomain: "ecommers-coderhose.firebaseapp.com",
  projectId: "ecommers-coderhose",
  storageBucket: "ecommers-coderhose.appspot.com",
  messagingSenderId: "996758493966",
  appId: "1:996758493966:web:ced0084738b1915a96d55f",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
