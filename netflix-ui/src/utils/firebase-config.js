import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkkuGCv6dGKJjYd2RY-wJKOa1O_Ppwj8M",
  authDomain: "netflix-project-da7d0.firebaseapp.com",
  projectId: "netflix-project-da7d0",
  storageBucket: "netflix-project-da7d0.appspot.com",
  messagingSenderId: "725042856463",
  appId: "1:725042856463:web:787ea41e7f6517e0c3597a",
  measurementId: "G-ES5YWKDFN8"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)