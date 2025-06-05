import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blog-next-2614f.firebaseapp.com",
    projectId: "blog-next-2614f",
    storageBucket: "blog-next-2614f.firebasestorage.app",
    messagingSenderId: "141687141532",
    appId: "1:141687141532:web:661a4da69bbe58bfbca959"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);