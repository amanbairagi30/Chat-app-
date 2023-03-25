import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl4kwS3ayO8YWFc2iaF2iOLxpiN8KXLFU",
  authDomain: "my-chat-app-848fe.firebaseapp.com",
  projectId: "my-chat-app-848fe",
  storageBucket: "my-chat-app-848fe.appspot.com",
  messagingSenderId: "871216476230",
  appId: "1:871216476230:web:1c0cbf0e95b068b758da47"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;