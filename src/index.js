import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDm_dXmN-SPOh62fjJMRQ8s4tIxYLCMCws",
  authDomain: "react-f6e0f.firebaseapp.com",
  projectId: "react-f6e0f",
  storageBucket: "react-f6e0f.appspot.com",
  messagingSenderId: "6244213749",
  appId: "1:6244213749:web:7d4c51cd57f97f831cf6bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //<React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
