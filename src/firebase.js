import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBEMrUQAcPgjCJnxUStbtkeoc5h9Gd7yd0",
    authDomain: "agilelearningz.firebaseapp.com",
    projectId: "agilelearningz",
    storageBucket: "agilelearningz.firebasestorage.app",
    messagingSenderId: "471037479153",
    appId: "1:471037479153:web:0a7d983a6372a4022a0150",
    measurementId: "G-G7X2QPX1FY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
