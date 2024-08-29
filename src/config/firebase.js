// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB7GkxLzbIMwvN5pPnX6PoNf3zGqay-iLo',
    authDomain: 'next-coderhouse-ecommerce.firebaseapp.com',
    projectId: 'next-coderhouse-ecommerce',
    storageBucket: 'next-coderhouse-ecommerce.appspot.com',
    messagingSenderId: '533732034112',
    appId: '1:533732034112:web:4c917a9c63421d1d3d41a5',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
